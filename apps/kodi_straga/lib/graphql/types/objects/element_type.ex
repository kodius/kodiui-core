

defmodule Graphql.Types.Objects.ElementType do
  use Absinthe.Schema.Notation
  import_types(Graphql.Types.Objects.HistoryReleaseType)

  object :element do
    field :id, non_null(:id)
    field(:name, :string)
    field(:description, :string)
    field(:history_releases, list_of(:history_release))
    field(:category_id, :category)
  end
end