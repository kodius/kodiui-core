defmodule KodiStraga.Repo.Migrations.ElementsAddExampleColumn do
  use Ecto.Migration

  def change do
    alter table("elements") do
      add :example, :string
    end
  end
end
