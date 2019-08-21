ct=$(cat cmd/ini)

for i in */*.js
do
    echo $i
echo $ct >> $i
done

