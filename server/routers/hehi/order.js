/** 
 * 车主相关信息接口
*/
const router = require('koa-router')();
const dispatchController = require('../../controllers/hehi/dispatch');

const routes = router
    .post('/order/list', dispatchController.getOrderList)     // 预约列表
    .post('/order/:id', dispatchController.getOrderInfo)      // 预约详情
    .post('/order/confirm', dispatchController.getOrderList)     // 接受or拒绝预约


module.exports = routes;