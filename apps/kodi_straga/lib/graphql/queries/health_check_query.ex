defmodule Graphql.Queries.HealthCheck do
  def resolve(_, _, _) do
    {:ok, true}
  end
end
