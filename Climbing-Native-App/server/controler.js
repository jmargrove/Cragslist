const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/climbing'
const { sendToAWS }= require('./model.js')
const { postToMong }= require('./postToMong.js')

exports.postImage = async (ctx, next) => {
  console.log("the server request is here")
  const Etag = await sendToAWS(ctx);
  console.log('ETAG:....', Etag)
  ctx.response.body = await {'Etag' : Etag}
}

exports.postToMong = async (ctx, next) => {
  console.log("posted")
  const db = await MongoClient.connect(url)
  await db.collection('imageFileNames').insertOne(ctx.request.body);
  await db.close()
  ctx.response.body = await ctx.request.body
}