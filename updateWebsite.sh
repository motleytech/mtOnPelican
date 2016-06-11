rm -rf motleytechnet/output/*
cd motleytechnet
pelican content
ssh root@motleytech.net 'rm -rf /website/*'
scp -r output/* root@motleytech.net:/website/
