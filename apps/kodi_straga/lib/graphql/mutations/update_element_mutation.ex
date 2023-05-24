defmodule Graphql.Mutations.UpdateElement do
  alias KodiStraga.Repo
  alias Schemas.Element
  alias Schemas.HistoryRelease

  def resolve(%{id: id, update_element_input: update_element_params}, _info) do
    element = Repo.get(Element, id)

    %HistoryRelease{
      name: update_element_params.name,
      description: update_element_params.description,
      version: update_element_params.version,
      example: update_element_params.example
      element_id: element.id
    }
    |> HistoryRelease.changeset()
    |> Repo.insert()

    Repo.get(Element, id)
    |> Element.changeset(update_element_params)
    |> Repo.update()
  end
end
