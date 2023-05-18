defmodule Graphql.Mutations.CreateElement do
  alias KodiStraga.Repo
  alias Schemas.Element

  def create_element(_, args, _) do
    %Element{}
    |> Element.changeset(args)
    |> Repo.insert()
  end
end