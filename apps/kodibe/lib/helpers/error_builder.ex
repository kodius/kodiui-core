defmodule Helpers.ErrorBuilder do
  def unauthorized do
    {:error, message: "Access denied", code: 403}
  end

  def not_found do
    {:error, message: "Not found", code: 404}
  end

  def not_active(instance) do
    {:error, message: "#{instance} not active", code: 403}
  end

  def invalid_date_range(instance) do
    {:error, message: "#{instance} date range not valid", code: 403}
  end

  def invalid_authorization do
    {:error, message: "Access denied - invalid authorization", code: 403}
  end
end
