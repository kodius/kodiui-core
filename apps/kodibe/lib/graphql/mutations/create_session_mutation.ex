defmodule Graphql.Mutations.CreateSession do
  alias Services.Authorization.AuthenticateAccountService

  def resolve(_root, %{input: input}, _context) do
    AuthenticateAccountService.execute(input[:email], input[:username], input[:password])
  end
end
