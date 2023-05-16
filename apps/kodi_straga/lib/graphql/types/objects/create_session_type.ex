defmodule Graphql.Types.Objects.CreateSessionType do
  use Absinthe.Schema.Notation

  object :session do
    field(:account, :account)
    field(:token, :string)
  end
end
