
defmodule Graphql.Types.Objects.CategoryType do
  use Absinthe.Schema.Notation

  object :category do
    field :id, non_null(:id)
    field(:name, :string)
    field(:elements, list_of(:element))
  end
end
