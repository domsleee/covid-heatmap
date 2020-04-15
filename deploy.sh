set -e;
rm -rf docs
npm run build
cp -r dist docs