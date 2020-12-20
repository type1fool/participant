defmodule Participant.Repo do
  use Ecto.Repo,
    otp_app: :participant,
    adapter: Ecto.Adapters.Postgres

    def init(_context, config) do
      new_config =
        config
        |> Keyword.put(:host, System.get_env("PG_HOST"))
        |> Keyword.put(:user, System.get_env("PG_USER"))
        |> Keyword.put(:password, System.get_env("PG_PASSWORD"))

      {:ok, new_config}
    end
end
