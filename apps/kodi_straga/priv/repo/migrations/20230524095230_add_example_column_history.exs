defmodule KodiStraga.Repo.Migrations.AddExampleColumnHistory do
  use Ecto.Migration

  def change do
    alter table("history_releases") do
      add :example, :string
    end
  end
end
