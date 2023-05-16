defmodule Services.Token.Signer do
  def generate do
    {:ok, pem_contents} = File.read("private_key.pem")
    Joken.Signer.create("RS256", %{"pem" => pem_contents})
  end
end
