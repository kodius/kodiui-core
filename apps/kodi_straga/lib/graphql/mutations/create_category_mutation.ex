defmodule Graphql.Mutations.CreateCategory do
  alias KodiStraga.Repo
  alias Schemas.Category

  def create_category(_, %{name: name}, _) do
    %Category{
      name: name
    }
    |> Repo.insert()
  end
end
