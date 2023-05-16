
dev:
	@MIX_ENV=dev mix ecto.setup && iex -S mix phx.server

test:
	@MIX_ENV=test mix test

compile:
	@mix do deps.get, compile
check:
	@mix do deps.get, compile --warnings-as-errors, credo list, format --check-formatted

check_full:
	@mix do deps.get, compile --warnings-as-errors, credo list, format --check-formatted, dialyzer

reset-db:
	mix do ecto.reset

seed-db:
	mix seed

reseed-db: reset-db seed-db

