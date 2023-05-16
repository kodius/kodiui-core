defmodule KodiStraga.Repo do
  use Ecto.Repo,
    otp_app: :kodi_straga,
    adapter: Ecto.Adapters.Postgres
end
