#!/usr/bin/env bash
# Pull merchant-owned content files (settings, template JSONs, section groups)
# from the unpublished staging theme into the local theme directory.
# Complements scripts/push.sh: pull.sh fetches exactly what push.sh ignores.
set -euo pipefail

THEME_ID="188892709150"

cd "$(dirname "$0")/../theme"

shopify theme pull \
  --theme="$THEME_ID" \
  --only="config/settings_data.json" \
  --only="templates/*.json" \
  --only="sections/*.json"
