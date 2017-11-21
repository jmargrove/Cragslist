// import { sendToAWS } from './model'
const { sendToAWS }= require('./model.js')
const { retrieveImage }= require('./retrieveImage.js')
// const mongodb = require('mongodb')
// const R = require('r-script')
// const fs = require('fs')
//
exports.postImage = async (ctx, next) => {
  // console.log(Object.keys(ctx.request.body.fields.photo)); is the main photo
  console.log("the server request is here")
  const Etag = await sendToAWS(ctx);
  console.log('ETAG:....', Etag)
  ctx.response.body = await {'Etag' : Etag}
}


//
exports.retrieveImage = async (ctx, next) => {
  retrieveImage(ctx)
  ctx.response.body = {var: 'help me ...'}
}
