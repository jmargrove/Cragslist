const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const serve = require('koa-static');
const router = require('./router.js')

app
  .use(cors())
  // .use(serve('.')) // have to have this to get the images going ....
  .use(router.routes())
  .listen(8080)
