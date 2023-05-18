defmodule Graphql.Types.Objects.HistoryReleaseType do
  use Absinthe.Schema.Notation

  object :history_release do
    field :id, non_null(:id)
    field(:name, :string)
    field(:version, :string)
    field(:description, :string)
    field(:element_id, :id)
  end
end
