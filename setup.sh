#/bin/bash

apt-get update
apt-get upgrade

apt-get install curl

curl -fsSL https://deb.nodesource.com/setup_18.x | bash - &&\
apt-get install -y nodejs

node -v

npm -v
