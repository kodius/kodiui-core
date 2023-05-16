use Mix.Config

config :kodi_straga, KodiStragaWeb.Endpoint,
  http: [port: 4000],
  url: [host: "localhost", port: 4000],
  server: true,
  root: ".",
  version: Mix.Project.config()[:version]

config :logger, level: :info

config :cors_plug,
  origin: [
    "http://localhost:3000/",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "FETCH", "OPTIONS"]
