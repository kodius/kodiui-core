#!/bin/bash

mix ecto.migrate && _build/prod/rel/kodi_straga/bin/kodi_straga start
