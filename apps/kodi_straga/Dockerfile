FROM elixir:1.14.4-alpine AS build

# ...

FROM elixir:1.14.4-alpine AS app

ARG database_url
ENV DATABASE_URL=$database_url
ARG port
ENV PORT=$port
ARG secret_key_base
ENV SECRET_KEY_BASE=$secret_key_base
ARG mix_env
ENV MIX_ENV=$mix_env
ARG release_level
ENV RELEASE_LEVEL=$release_level

RUN apk --no-cache update \
    && apk --no-cache upgrade \
    && apk add --no-cache \
    ttf-liberation \
    make \
    build-base
    
RUN apk add --no-cache bash

RUN mkdir /app
WORKDIR /app

COPY mix.exs mix.lock ./

RUN mix do local.hex --force, local.rebar --force, deps.clean --all, deps.get, deps.compile

# COPY assets/package.json ./assets/
# RUN npm install --prefix ./assets

COPY . .

RUN mix do release

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

CMD ["mix", "phx.server"]

