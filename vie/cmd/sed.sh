for i in par/*.ejs
do
grep --color "img/" $i
#sed -i "s/img\//img\/jpg/g" $i
done
