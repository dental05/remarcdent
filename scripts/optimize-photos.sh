#!/usr/bin/env bash
#
# Regenerates the web-sized team photos that the site actually serves.
#
# Full-resolution originals live in photos-original/ and are never deployed.
# This turns each one into an 800px WebP in public/poze_cabinet/, which is
# roughly 1/300th the size — a 9.8 MB JPEG becomes about 30 KB.
#
#   ./scripts/optimize-photos.sh          # only convert what is missing
#   ./scripts/optimize-photos.sh --force  # redo everything
#
# Requires cwebp:  brew install webp
set -euo pipefail

cd "$(dirname "$0")/.."
SRC="photos-original/poze_cabinet"
DEST="public/poze_cabinet"
MAX_WIDTH=800
QUALITY=80

if ! command -v cwebp >/dev/null; then
  echo "cwebp not found. Install it with: brew install webp" >&2
  exit 1
fi

mkdir -p "$DEST"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

# Only build the photos the team CSV actually points at, so unused originals
# do not get shipped. Column 2 of personal_list.csv is Nr.poza.
photo_numbers="$(tail -n +2 public/personal_list.csv | cut -d, -f2 | tr -d ' \r' | grep -E '^[0-9]+$' || true)"

if [ -z "$photo_numbers" ]; then
  echo "No photo numbers found in public/personal_list.csv" >&2
  exit 1
fi

converted=0
skipped=0
missing=0
for n in $photo_numbers; do
  name="Foto-$n"
  src="$SRC/$name.jpg"
  out="$DEST/$name.webp"

  if [ ! -f "$src" ]; then
    echo "  WARNING: $src is referenced by the CSV but missing" >&2
    missing=$((missing + 1))
    continue
  fi

  if [ -f "$out" ] && [ "${1:-}" != "--force" ]; then
    skipped=$((skipped + 1))
    continue
  fi

  sips -Z "$MAX_WIDTH" "$src" --out "$tmp/$name.jpg" >/dev/null 2>&1
  cwebp -q "$QUALITY" -quiet "$tmp/$name.jpg" -o "$out"
  printf '  %-16s %6sK -> %5sK\n' "$name" \
    $(( $(stat -f%z "$src") / 1024 )) $(( $(stat -f%z "$out") / 1024 ))
  converted=$((converted + 1))
done

echo "converted $converted, skipped $skipped (already present)"
if [ "$missing" -gt 0 ]; then
  echo "$missing photo(s) referenced by the CSV have no original — see warnings above" >&2
  exit 1
fi
