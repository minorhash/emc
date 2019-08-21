usr=admin
pss=bulk2010
host=tmsm.bulks.jp

lftp -u $usr,$pss $host -e "\
cd exp/biz/cafe/wk4
pwd
lpwd
# mirror -R vie
# mirror -R rot
mirror node_modules

 # cd public
 # lcd public
 # mirror -R js

# cd node_modules
# lcd node_modules
# mirror -R cardb
# mirror -R usrdb
exit"
