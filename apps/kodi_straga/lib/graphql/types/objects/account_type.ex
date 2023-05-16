defmodule Graphql.Types.Objects.AccountType do
  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  node object(:account) do
    field(:email, :string)
    field(:username, :string)
    field(:first_name, :string)
    field(:last_name, :string)
  end
end
