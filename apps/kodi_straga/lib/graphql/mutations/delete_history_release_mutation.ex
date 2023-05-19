defmodule Graphql.Mutations.DeleteHistoryRelease do
  alias KodiStraga.Repo
  alias Schemas.HistoryRelease

  def resolve(%{id: id}, _info) do

    HistoryRelease
    |> Repo.get(id)
    |> resolve_delete_link()
  end
  defp resolve_delete_link(%HistoryRelease{} = historyrelease), do: Repo.delete(historyrelease)
end
