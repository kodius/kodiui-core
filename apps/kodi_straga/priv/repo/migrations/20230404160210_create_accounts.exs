defmodule KodiStraga.Repo.Migrations.CreateAccounts do
  use Ecto.Migration

  def change do
    execute("CREATE EXTENSION citext;")

    create table(:accounts) do
      add(:email, :citext)
      add(:first_name, :string)
      add(:last_name, :string)
      add(:username, :string)
      add(:password_digest, :string)
      add(:active, :boolean, default: true)

      timestamps()
    end

    create(unique_index(:accounts, [:email]))
    create(unique_index(:accounts, [:username]))
  end
end
