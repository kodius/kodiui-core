
defmodule Graphql.Mutations.CreateHistoryRelease do
  alias KodiStraga.Repo
  alias Schemas.HistoryRelease

  def resolve(_, %{input: input}, _) do
    IO.puts("KURCINA")
    IO.inspect(input)

    %HistoryRelease{}
    |> HistoryRelease.changeset(input)
    |> Repo.insert()
  end
end