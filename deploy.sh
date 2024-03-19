#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B master
git add -A
git commit -m 'deploy'

# if you are deploying to https://nicole0322n.github.io
# git push -f git@github.com:nicole0322n/nicole0322n.github.io.git main

# if you are deploying to https://nicole0322n.github.io/hexschool-week6
git push -f git@github.com:nicole0322n/hexschool-week6.git master:gh-pages

cd -