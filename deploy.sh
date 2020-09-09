echo "Updating ..."

npm run build

export AWS_ACCESS_KEY_ID=AKIAIG2JVXADRDLVZ5YQ
export AWS_SECRET_ACCESS_KEY=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
aws s3 sync ./build s3://www.baguettetordue.fr --delete --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers

echo "Up to date ! :)"