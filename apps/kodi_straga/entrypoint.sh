#!/bin/bash

mix ecto.migrate && _build/dev/rel/kodi_straga/bin/kodi_straga start
