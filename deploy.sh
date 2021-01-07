#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
mv dist docs
cd docs

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add .
git commit -m 'deploy'
git branch -M master

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:Zait06/Zait06.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:Zait06/portafolio.git master:gh-pages

cd -