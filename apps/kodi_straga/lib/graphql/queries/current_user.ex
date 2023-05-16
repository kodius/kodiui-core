defmodule Graphql.Queries.CurrentUser do
  def call(_, _, %{context: %{current_user: current_user}}) do
    {:ok, current_user}
  end
end
