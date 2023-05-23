
defmodule Graphql.Mutations.DeleteElement do
  alias KodiStraga.Repo
  alias Schemas.Element

  def resolve(%{id: id}, _info) do
   Element 
    |> Repo.get(id)
    |> resolve_delete_link()
  end
  defp resolve_delete_link(%Element{} = element), do: Repo.delete(element)
end
