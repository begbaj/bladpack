#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")"
mkdir -p build/

cd pack

version=$(grep -m1 '^version' pack.toml | cut -d'"' -f2)

packwiz refresh
packwiz mr export -o "../build/Bladpack-${version}.mrpack"
