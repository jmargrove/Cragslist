const Router = require('koa-router')
const router = new Router()
const koaBody = require('koa-body');
const Koa = require('koa');
const app = new Koa();
const controler = require('./controler.js')


router.post('/imageAWS', koaBody({
  multipart: true
}), controler.postImage)

router.post('/postToMong', koaBody(),controler.postToMong)
router.get('/getDBData', koaBody(), controler.getDBData)

module.exports = router
