#! /bin/bash

rm -rf .vitepress/dist
npm run docs:build
rm -rf ~/aws/dist
mkdir ~/aws/dist
cp -ruT .vitepress/dist/ ~/aws/dist

echo
echo ----------
echo jumping into pointw-aws so you can complete the publish
echo  - change into /work then run publish-pointw
echo ----------

docker start pointw-aws
docker exec -it pointw-aws bash
