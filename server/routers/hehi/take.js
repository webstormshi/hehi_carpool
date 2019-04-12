/** 
 * 乘车相关信息接口
*/
const router = require('koa-router')();
const takeController = require('../../controllers/hehi/take');

const routes = router
    .post('/order/list', takeController.getOrderList)     // 预约列表
    .post('/order/:id', takeController.getOrderInfo)      // 预约详情
    .post('/order/confirm', takeController.getOrderList)     // 接受or拒绝预约


module.exports = routes;