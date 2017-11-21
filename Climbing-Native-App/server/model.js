const uuid = require('uuid/v4');
const AWS = require('aws-sdk');


exports.sendToAWS = function(ctx){
  // console.log(image)
  //ctx.request.body.fields.photo
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
  ////// file names and id
  var fileName = uuid();
  var albumPhotosKey = 'climbing-app/';
  var photoKey = albumPhotosKey + fileName;

  //////// stack exchange answer
  buf = new Buffer(ctx.request.body.fields.photo.replace(/^data:image\/\w+;base64,/, ""),'base64')
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


  // s3.putObject(data, function(err, data){
  //     if (err) {
  //       console.log('Error uploading data: ', data);
  //     } else {
  //       console.log('succesfully uploaded the image!', data.ETag);
  //       return data.Etag
  //     }
  // });




  ///////// auch aye /////

  // let location;
  // var files = image
  // if (!files.length) {
  //   return alert('Please choose a file to upload first.');
  // }
  //
  // var file = files;
  // var fileName = uuid();
  // var albumPhotosKey = 'climbing-app/';
  // var photoKey = albumPhotosKey + fileName;
  // console.log({
  //   photoKey,
  //   file,
  // });
  // s3.upload({
  //   Key: photoKey,
  //   Body: file,
  //   ACL: 'public-read'
  // }, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     return console.error('There was an error uploading your photo: ', err.message);
  //   }
  //   console.log('Successfully uploaded photo.', data.Location);
  //   this.setState({
  //     "path": data.Location
  //   });
  // });

}


//
//
//
//
// const aws = require('aws-sdk')
// const multer = require('multer')
// const multerS3 = require('multer-s3')
//
// const s3 = new aws.S3({
//   accessKeyId: 'AKIAJHOC5P2JBOPCM5TQ',
//   secretAccessKey: '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',
//   region: 'eu-west-1',
// });
//
// // Initialize multers3 with our s3 config and other options
// const upload = multer({
//   storage: multerS3({
//     s3,
//     bucket: 'james.margrove',
//     acl: 'public-read',
//     metadata(req, file, cb) {
//       cb(null, {fieldName: file.fieldname});
//     },
//     key(req, file, cb) {
//       cb(null, Date.now().toString() + '.png');
//     }
//   })
// })
//
// // Expose the /upload endpoint
// const app = require('express')();
// const http = require('http').Server(app);
//
// app.post('/imageAWS', upload.single('photo'), (req, res, next) => {
//   console.log("router working...")
//   res.json(req.file)
// })
//
// let port = process.env.PORT || 8080;
// http.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
//
//
//
// // const uuid = require('uuid/v4');
// // const AWS = require('aws-sdk');
// //
// //
// // exports.sendToAWS = function(image){
// //   // console.log(image)
// //
// //   var albumBucketName = 'james.margrove';
// //   var bucketRegion = 'eu-west-1';
// //   var IdentityPoolId = 'eu-west-1:2326fc41-82f5-4be7-875b-b8c11805ed3d';
// //
// //
// //   AWS.config.update({
// //     region: bucketRegion,
// //     credentials: new AWS.CognitoIdentityCredentials({
// //       IdentityPoolId: IdentityPoolId
// //     })
// //   });
// //
// //   var s3 = new AWS.S3({
// //     apiVersion: '2006-03-01',
// //     params: {Bucket: albumBucketName}
// //   });
// //
// //
// //
// //   let location;
// //   var files = image
// //   if (!files.length) {
// //     return alert('Please choose a file to upload first.');
// //   }
// //
// //   var file = files;
// //   var fileName = uuid();
// //   var albumPhotosKey = 'climbing-app/';
// //   var photoKey = albumPhotosKey + fileName;
// //   console.log({
// //     photoKey,
// //     file,
// //   });
// //   s3.upload({
// //     Key: photoKey,
// //     Body: file,
// //     ACL: 'public-read'
// //   }, (err, data) => {
// //     if (err) {
// //       console.log(err);
// //       return console.error('There was an error uploading your photo: ', err.message);
// //     }
// //     console.log('Successfully uploaded photo.', data.Location);
// //     this.setState({
// //       "path": data.Location
// //     });
// //   });
// // }
// //
// //
// //   // // var photo = image;
// //   // var albumBucketName = 'james.margrove';
// //   // var bucketRegion = 'eu-west-1';
// //   // var IdentityPoolId = 'eu-west-1:2326fc41-82f5-4be7-875b-b8c11805ed3d';
// //   //
// //   // AWS.config.update({
// //   //   region: bucketRegion,
// //   //   credentials: new AWS.CognitoIdentityCredentials({IdentityPoolId: IdentityPoolId}),
// //   // });
// //   //
// //   // var s3 = new AWS.S3({
// //   //   apiVersion: '2006-03-01',
// //   //   params: {Bucket: albumBucketName}
// //   // });
// //   //
// //   //
// //   // let location;
// //   // if (!image.length) {
// //   //   return alert('Please choose a file to upload first.');
// //   // }
// //   // var fileName = uuid(); /// done
// //   // var albumPhotosKey = 'climbing-app/';
// //   // var photoKey = albumPhotosKey + fileName; /// done
// //   //
// //   // s3.upload({
// //   //   Key: photoKey,
// //   //   Body: "photo",
// //   //   ACL: 'public-read',
// //   // }, (err, data) => {
// //   //   if (err) {
// //   //     console.log("logging the error", err);
// //   //     return console.error('There was an error uploading your photo: ', err.message);
// //   //   }
// //   //   console.log('Successfully uploaded photo.', data.Location)//, this.state);
// //   // });
