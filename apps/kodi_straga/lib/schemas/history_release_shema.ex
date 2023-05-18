
defmodule Schemas.HistoryRelease do
  use Ecto.Schema
  import Ecto.Changeset

  alias Schemas.Element

  @changeset ~w(name description version element_id)a

  schema "history_releases" do
    field :name, :string
    field :description, :string
    field :version, :string
    belongs_to :element, Element 
    timestamps()
  end

  def changeset(element, args \\ %{}) do
    element
    |> cast(args, @changeset)
    |> validate_required([:name, :description, :version, :element_id])
  end
end