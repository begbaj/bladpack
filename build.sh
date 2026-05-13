#!/bin/bash

if [ ! -d "build/" ]; then
	mkdir build/
fi

cd pack

packwiz mr export -d ../build/
