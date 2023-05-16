defmodule Graphql.Types.Inputs.CreateSessionInput do
  use Absinthe.Schema.Notation

  input_object :create_session_input do
    field(:email, :string)
    field(:username, :string)
    field(:password, non_null(:string))
  end
end
