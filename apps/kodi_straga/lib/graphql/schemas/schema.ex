defmodule Graphql.Schemas.Schema do
  use Absinthe.Schema
  use Absinthe.Relay.Schema, :modern
  use KodiStragaWeb.Auth.CustomMiddleware

  alias Graphql.Queries.{CurrentUser, HealthCheck, Category, GetElementById}
  alias Graphql.Mutations.CreateSession
  alias Graphql.Mutations.CreateCategory
  alias Graphql.Mutations.CreateElement
  alias Graphql.Mutations.CreateHistoryRelease

  import_types(Graphql.Types.Inputs.{CreateSessionInput, CreateHistoryReleaseInput})
  import_types(Graphql.Types.Objects.AccountType)
  import_types(Graphql.Types.Objects.CreateSessionType)
  import_types(Graphql.Types.Objects.CategoryType)
  import_types(Graphql.Types.Objects.ElementType)


  connection(node_type: :account)

  node interface do
    resolve_type(fn
      %Schemas.Account{}, _ ->
        :account

      _, _ ->
        nil
    end)
  end

  query do
    node field do
      resolve(fn
        %{type: :account, id: local_id}, _ ->
          {:ok, KodiStraga.Repo.get(Schemas.Account, local_id)}

        _, _ ->
          {:error, "Unknown node"}
      end)
    end

    @desc "Health check"

    field :health_check, :boolean do
      resolve(&HealthCheck.resolve/3)
    end

    field :me, :account do
      resolve(&CurrentUser.call/3)
    end

    field :get_categories, list_of(:category) do
      resolve(&Category.get_categories/3)
    end
    
    field :get_element_by_id, :element do
      resolve(&GetElementById.resolve/3)
    end

  end

  mutation do
    field :create_session, :session do
      arg(:input, :create_session_input)
      resolve(&CreateSession.resolve/3)
    end

    field :create_category, :category do
      arg(:name, non_null(:string))
      resolve(&CreateCategory.create_category/3)
    end

    field :create_element, :element do
      arg(:name, non_null(:string))
      arg(:description , non_null(:string))
      arg(:category_id, non_null(:id))
      resolve(&CreateElement.create_element/3)
    end

    field :create_history_release, :history_release do
      arg(:input, :create_history_release_input)
      resolve(&CreateHistoryRelease.resolve/3)
    end
  end
end
