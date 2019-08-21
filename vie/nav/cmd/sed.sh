for i in *ejs
do
sed -i s/navbarSupportedContent/drp/g $i
#sed -i s/navbarDropdown/drp/g $i
sed -i s/drp/sup/g $i
done
