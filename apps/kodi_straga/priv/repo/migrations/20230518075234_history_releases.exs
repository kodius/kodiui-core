defmodule KodiStraga.Repo.Migrations.HistoryReleases do
  use Ecto.Migration

  def change do
    create table(:history_releases) do
      add :name, :string, null: false
      add :version, :string, null: false
      add :description, :string, null: false
      add :element_id, references(:elements, on_delete: :nothing), null: false

      timestamps()
    end
  end
end
