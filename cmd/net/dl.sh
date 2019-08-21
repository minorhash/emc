usr=admin
pss=bulk2010
host=tmsm.bulks.jp

lftp -u $usr,$pss $host -e "\
cd exp/biz/cafe/wk4
pwd
lpwd
mirror vie
mirror rot
mirror pub
exit"
