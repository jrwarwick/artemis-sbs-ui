#!/bin/sh
FNAMEBASE=$(echo $1 | cut -f 1 -d '.')
/usr/local/bin/ffmpeg -i $1 -c:a libvorbis $FNAMEBASE.webm
/usr/local/bin/ffmpeg -i $1 -c:a aac $FNAMEBASE.m4a

