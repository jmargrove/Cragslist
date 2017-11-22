const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/climbing'
const sendToAWS = require('./model.js');


exports.postImage = async (ctx, next) => {
  const locOnAWS = await sendToAWS(ctx);
  ctx.response.body = await {'imageUri' : locOnAWS}
}

exports.postToMong = async (ctx, next) => {
  const db = await MongoClient.connect(url)
  await db.collection('imageFileNames').insertOne(ctx.request.body);
  await db.close()
  ctx.response.body = await ctx.request.body
}

exports.getDBData = async (ctx, next) => {
  const db = await MongoClient.connect(url);
  results = await db.collection('imageFileNames').find({}).toArray();
  console.log(results)
  ctx.response.body = await (results);
  db.close();
}
