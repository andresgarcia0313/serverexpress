#!/bin/bash


flatpak override com.google.Chrome --filesystem=home
flatpak override com.google.Chrome --talk-name=org.freedesktop.DBus
flatpak override com.google.Chrome --share=network

flatpak override com.google.Chrome --talk-name=org.freedesktop.Flatpak
sudo flatpak override com.google.Chrome --filesystem=host --persist=.vscode

sudo flatpak override com.google.Chrome --talk-name=org.freedesktop.Flatpak --share=network

flatpak override com.google.Chrome --env=CHROME_FLAGS="--remote-debugging-port=9222"
flatpak info --show-permissions com.google.Chrome
flatpak run com.google.Chrome --remote-debugging-port=9222
echo "Permisos para Chrome configurados correctamente."
