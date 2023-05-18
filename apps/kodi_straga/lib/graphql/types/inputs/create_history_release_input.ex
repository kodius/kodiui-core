
defmodule Graphql.Types.Inputs.CreateHistoryReleaseInput do
  use Absinthe.Schema.Notation

  input_object :create_history_release_input do
    field(:name, non_null(:string))
    field(:description, non_null(:string))
    field(:version, non_null(:string))
    field(:element_id, non_null(:id))
  end
end