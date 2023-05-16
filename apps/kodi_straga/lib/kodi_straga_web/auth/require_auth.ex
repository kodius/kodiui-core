defmodule KodiStragaWeb.Auth.RequireAuth do
  @behaviour Absinthe.Middleware

  alias Absinthe.Resolution
  alias Helpers.ErrorBuilder

  def call(%{context: %{current_user: %{active: true}}} = res, _config) do
    res
  end

  def call(res, _config) do
    Resolution.put_result(res, ErrorBuilder.invalid_authorization())
  end
end
