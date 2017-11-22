const uuid = require('uuid/v4');
const AWS = require('aws-sdk');


exports.sendToAWS = async (ctx, next) => {
  ////// file names and id
  var fileName = Object.keys(ctx.request.body.fields)[0];
  var albumPhotosKey = 'climbing-app/';
  var photoKey = albumPhotosKey + fileName;

  ///////// amazon webservices
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

  //////// stack exchange answer
  buf = new Buffer(ctx.request.body.fields[fileName].replace(/^data:image\/\w+;base64,/, ""),'base64')
  var data = {
    Bucket: "james.margrove",
    Key: photoKey,
    Body: buf,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg'
  };

  s3.upload(data, function(err, data){
    console.log(data)
  })
}
