/** 
 * 车主相关信息接口
*/
const router = require('koa-router')();
const ownerController = require('../../controllers/hehi/owner');

const routes = router
    .get('/profile/edit', ownerController.editProfile)              // 完善车主信息
    .post('/profile/edit', ownerController.editProfile)             // 完善车主信息

module.exports = routes;