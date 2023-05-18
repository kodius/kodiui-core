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
               :get_categories
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
