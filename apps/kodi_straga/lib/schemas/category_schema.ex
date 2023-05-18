defmodule Schemas.Category do
  alias Schemas.Element
  import Ecto.Changeset
  import Ecto.Query, warn: false
  use Ecto.Schema

  schema "categories" do
    field :name, :string
    has_many :elements, Element
    timestamps()
  end
end
