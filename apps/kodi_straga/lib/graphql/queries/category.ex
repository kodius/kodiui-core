defmodule Graphql.Queries.Category do
  import Ecto.Query, warn: false
  alias KodiStraga.Repo
  alias Schemas.Category
  alias Schemas.Element
  alias Schemas.HistoryRelease

  def get_categories(_, _, _) do
    response =
      Repo.get(Category, 1)
      |> Repo.preload(elements: [:history_releases])

    {:ok, response}
  end
end