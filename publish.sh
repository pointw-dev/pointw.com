#! /bin/bash

rm -rf .vitepress/dist
npm run docs:build
rm -rf ~/aws/dist
mkdir ~/aws/dist
cp -ruT .vitepress/dist/ ~/aws/dist

docker start pointw-aws
docker exec -it -w /work pointw-aws ./publish-pointw
