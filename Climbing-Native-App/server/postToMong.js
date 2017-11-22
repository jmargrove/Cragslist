const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/climbing'


exports.sendToAWS = async (ctx, next) => {
  console.log("posted")
  const db = await MongoClient.connect(url)
  await db.collection('imageFileNames').insertOne(ctx.request.body);
  await db.close()
  ctx.response.body = await ctx.request.body
}
