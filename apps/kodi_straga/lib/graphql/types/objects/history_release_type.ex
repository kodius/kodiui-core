defmodule Graphql.Types.Objects.HistoryReleaseType do
  use Absinthe.Schema.Notation

  object :history_relesase do
    field :id, non_null(:id)
    field(:name, :string)
    field(:version, :string)
    field(:description, :string)
    field(:element_id, :id)
    field(:example, :string)
  end
end
