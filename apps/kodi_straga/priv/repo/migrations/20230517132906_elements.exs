defmodule KodiStraga.Repo.Migrations.Elements do
  use Ecto.Migration

  def change do
    create table(:elements) do
      add :name, :string, null: false
      add :description, :string, null: false
      add :category_id, references(:categories, on_delete: :nothing), null: false

      timestamps()
    end
  end
end
