defmodule KodiStraga.Repo.Migrations.HistoryLogsDeleteAllOnElementDelete do
  use Ecto.Migration

  def change do
    alter table("history_releases") do
      remove :element_id
    end
  end
end
