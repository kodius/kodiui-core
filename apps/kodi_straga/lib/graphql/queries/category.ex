defmodule Graphql.Queries.Category do
  import Ecto.Query, warn: false
  alias KodiStraga.Repo
  alias Schemas.Category
  alias Schemas.Element
  alias Schemas.HistoryRelease

  def get_categories(_, _, _) do
    response =
      Repo.all(Category)
      |> Repo.preload(elements: [:history_releases])

    {:ok, response}
  end
end
