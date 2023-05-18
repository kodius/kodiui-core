
defmodule Graphql.Queries.GetElementById do
  import Ecto.Query, warn: false
  alias KodiStraga.Repo
  alias Schemas.Category
  alias Schemas.Element

  def resolve(_, _, _) do
    IO.puts("KURCINA")
    # query =
    #   from c in Category,
    #     join: e in Element,
    #     on: e.category_id == c.id,
    #     select: %{c | elements: e }

    # {:ok, Repo.all(query)}
  end
end