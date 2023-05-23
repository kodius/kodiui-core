defmodule KodiStragaWeb.Auth.CustomMiddleware do
  defmacro __using__(_) do
    quote do
      # alias KodiStragaWeb.API.Graphql.Middleware
      alias KodiStragaWeb.Auth.RequireAuth

      def middleware(middleware, field, object) do
        if Enum.member?(
             [
               :create_session,
               :token,
               :get_categories,
               :category,
               :elements,
               :history_releases,
               :name,
               :description,
               :elementId,
               :version,
               :id,
               :get_element_by_id,
               :get_elements
             ],
             field.identifier
           ) or field.identifier === :session or
             field.__reference__.module === Absinthe.Type.BuiltIns.Introspection do
          middleware
        else
          [RequireAuth] ++ middleware
        end
      end
    end
  end
end
