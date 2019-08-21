ct=$(cat cmd/ini)

for i in */*.js
do
sed -i "1i$ct" $i
done

