defmodule KodiStraga.Repo.Migrations.Historylogs do
  use Ecto.Migration

  def change do
    alter table("history_releases") do
      add :element_id, references(:elements, on_delete: :delete_all), null: true 
    end
  end
end
