rm -rf motleytechnet/output/*
cd motleytechnet
pelican content
ssh root@motleytech.net 'rm -rf /website2; mkdir /website2'
scp -r output/* root@motleytech.net:/website2/
ssh root@motleytech.net 'rm -rf /website; mv /website2 /website'
