
const AWS = require('aws-sdk');

exports.retrieveImage = function(ctx){

  const albumBucketName = 'james.margrove';
  const bucketRegion = 'eu-west-1';
  const IdentityPoolId = 'eu-west-1:2326fc41-82f5-4be7-875b-b8c11805ed3d';

  AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: IdentityPoolId
    })
  });

  var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: albumBucketName}
  });

  const params = {
    Bucket: 'james.margrove',
    Key: 'climbing-app/0881a3c3-565e-4616-8246-e06e396d3a93',
  }


  s3.getObject(params, (err, data) => {
    if(err) console.log("error mnessages for you", err, err.stack)
    else console.log("data for you ...:", data)
  })

}
