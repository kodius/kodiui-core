
defmodule Graphql.Types.Inputs.UpdateElementInput do
  use Absinthe.Schema.Notation

  input_object :update_element_input do
    field(:name, non_null(:string))
    field(:description, non_null(:string))
    field(:version, non_null(:string))
    field(:example, :string)
  end
end
