/**
 * 整合所有子路由
 */

const router = require('koa-router')()

// const home = require('./home')
// const api = require('./api')
// const admin = require('./admin')
// const work = require('./work')
// const error = require('./error')

//呵呵打车 模块
const user = require('./hehi/user');                // 用户模块
const passenger = require('./hehi/passenger');      // 乘客对象
const owner = require('./hehi/owner');              // 车主对象
const dispatch = require('./hehi/dispatch');        // 发车信息
const take = require('./hehi/take');                // 打车信息
const order = require('./hehi/order');              // 订单信息

router.use('/user', user.routes(), user.allowedMethods());
router.use('/passenger', passenger.routes(), passenger.allowedMethods());
router.use('/owner', owner.routes(), owner.allowedMethods());
router.use('/dispatch', dispatch.routes(), dispatch.allowedMethods());
router.use('/take', take.routes(), take.allowedMethods());
router.use('/order', order.routes(), order.allowedMethods())

// router.use('/', home.routes(), home.allowedMethods())
// router.use('/api', api.routes(), api.allowedMethods())
// router.use('/admin', admin.routes(), admin.allowedMethods())
// router.use('/work', work.routes(), work.allowedMethods())
// router.use('/error', error.routes(), error.allowedMethods())

module.exports = router


