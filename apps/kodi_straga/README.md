# KodiStraga Elixir template

## To run project follow this steps:

1. Run `mix deps.get`
2. Create database `mix ecto.create`
3. Migrate databasee `mix ecto.migrate`
4. Generate private_key.pem file `openssl genrsa -out private_key.pem 4096`
5. run server `iex -S mix phx.server` or `make dev`

## Generate GQL schema

1. You'll need to run server locally `make dev`
2. `npm install get-graphql-schema -g`
3. `get-graphql-schema http://localhost:4000/api/graphql > docs/schema_graphql.gql`

## Remote access to console on server

`_build/prod/rel/kodi_straga/bin/kodi_straga remote`

## If you have problems with elixir and erlang version

`https://www.pluralsight.com/guides/installing-elixir-erlang-with-asdf`
