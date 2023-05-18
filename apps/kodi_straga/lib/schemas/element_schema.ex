defmodule Schemas.Element do
  use Ecto.Schema
  import Ecto.Changeset

  alias Schemas.Category
  alias Schemas.HistoryRelease

  @changeset ~w(name description)a

  schema "elements" do
    field :name, :string
    field :description, :string
    has_many :history_releases, HistoryRelease
    belongs_to :category, Category
    timestamps()
  end

  def changeset(element, args \\ %{}) do
    element
    |> cast(args, @changeset)
    |> validate_required([:name, :description])
  end
end
