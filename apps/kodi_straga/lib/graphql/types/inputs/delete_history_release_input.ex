defmodule Graphql.Types.Inputs.DeleteHistoryReleaseInput do
  use Absinthe.Schema.Notation

  input_object :delete_history_release_input do
    field(:id, non_null(:id))
  end
end
