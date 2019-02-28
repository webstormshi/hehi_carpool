/** 
 * 车主发车相关信息接口
*/
const router = require('koa-router')();
const dispatchController = require('../../controllers/hehi/dispatch');

const routes = router
    .post('/schedule/publish', dispatchController.publishSchedule)     // 发布开车时刻表
    .post('/schedule/edit', dispatchController.editSchedule)           // 修改开车时刻表
    .post('/schedule/cancel', dispatchController.cancelSchedule)       // 取消时刻表
    .get('/schedule/list', dispatchController.getScheduleList)         // 时刻表查询
    .post('/schedule/detail/:id', dispatchController.schedultInfo)     // 时刻表详情


module.exports = routes;