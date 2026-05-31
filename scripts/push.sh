#!/usr/bin/env bash
# Push the theme to the unpublished staging theme without touching
# merchant-owned content files (settings, template JSONs, section groups).
set -euo pipefail

THEME_ID="188892709150"

cd "$(dirname "$0")/../theme"

shopify theme push \
  --theme="$THEME_ID" \
  --ignore="config/settings_data.json" \
  --ignore="templates/*.json" \
  --ignore="sections/*.json"
