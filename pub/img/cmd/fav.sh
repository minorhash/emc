convert -size 50x50 canvas:khaki in.png
convert -resize x32 -gravity center -crop 32x32+0+0 -flatten -colors 256 in.png favicon.ico
rm in.png
