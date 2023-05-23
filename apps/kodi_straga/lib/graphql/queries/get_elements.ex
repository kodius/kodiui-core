defmodule Graphql.Queries.GetElements do
  import Ecto.Query, warn: false
  alias KodiStraga.Repo
  alias Schemas.Element

  def resolve(_, _args, _) do
    response =
      Repo.all(Element)
      |> Repo.preload(:history_releases)

    {:ok, response}
  end end
