
for i in *.ejs
do
echo $i
se=$(echo $i|sed s/pind//g)

mv $i $se
done
