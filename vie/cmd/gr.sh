for i in */*.ejs
do
grep --color img $i
#sed -i "s/cd\/png/cd\/jpg/g" $i
done
