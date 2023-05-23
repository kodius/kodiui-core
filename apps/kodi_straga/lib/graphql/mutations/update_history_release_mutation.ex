defmodule Graphql.Mutations.UpdateHistoryRelease do
  alias KodiStraga.Repo
  alias Schemas.HistoryRelease

  def resolve(%{id: id, history_release: history_release_params}, _info) do
    Repo.get(HistoryRelease, id)
      |> HistoryRelease.changeset(history_release_params) |> Repo.update
  end
end
