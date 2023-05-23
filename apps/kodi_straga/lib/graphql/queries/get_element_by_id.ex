defmodule Graphql.Queries.GetElementById do
  import Ecto.Query, warn: false
  alias KodiStraga.Repo
  alias Schemas.Category
  alias Schemas.Element

  def resolve(_, args, _) do
    response =
      Repo.get(Element, args.id)
      |> Repo.preload([:category, :history_releases])

    {:ok, response}
  end
end
