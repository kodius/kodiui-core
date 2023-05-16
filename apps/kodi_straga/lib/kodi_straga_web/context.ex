defmodule KodiStragaWeb.Context do
  @behaviour Plug

  import Plug.Conn
  import Ecto.Query, only: [where: 2]

  alias KodiStraga.Repo
  alias Schemas.Account

  def init(opts), do: opts

  def call(conn, _) do
    context = build_context(conn)
    Absinthe.Plug.put_options(conn, context: context)
  end

  # claims = Services.JwtToken.verify_and_validate!(token, signer)

  @doc """
  Return the current user context based on the authorization header
  """
  def build_context(conn) do
    with ["Bearer " <> token] <- get_req_header(conn, "authorization"),
         {:ok, %{"account_id" => account_id}} <-
           Services.Token.verify_and_validate(token, Services.Token.Signer.generate()),
         {:ok, current_user} <- authorize(account_id) do
      %{current_user: current_user}
    else
      _ ->
        %{}
    end
  end

  defp authorize(account_id) do
    Account
    |> where(id: ^account_id)
    |> Repo.one()
    |> case do
      nil -> {:error, "invalid authorization token"}
      user -> {:ok, user}
    end
  end
end
