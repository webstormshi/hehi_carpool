/** 
 * 乘客相关信息接口
*/
const router = require('koa-router')();
const ownerController = require('../../controllers/hehi/passenger');

const routes = router
    .post('/schedule/publish', ownerController.publishSchedule)     // 发布开车时刻表
    .post('/schedule/cancel', ownerController.cancelSchedule)       // 取消时刻表
    .get('/schedule/list', ownerController.getScheduleList)         // 时刻表查询
    .post('/schedule/detail/:id', ownerController.schedultInfo)     // 时刻表详情


module.exports = routes;