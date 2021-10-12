set profile=dursin_personal
set bucket=departing-web
set distribution_id=E2RYMSCW2SFKN3

aws s3 sync ./build s3://%bucket% --delete --profile=%profile% --region=us-east-1

aws cloudfront create-invalidation --distribution-id=%distribution_id% --paths="/*"  --region=us-east-1 --profile=%profile%