/** 
 * 车主相关信息接口
*/
const router = require('koa-router')();
const ownerController = require('../../controllers/hehi/owner');

const routes = router
    .get('/profile/add', ownerController.addOwner)                // 添加车主信息
    .post('/profile/add', ownerController.addOwner)              // 添加车主信息
    .get('/profile/list', ownerController.getOwnerList)              // 获取车主列表信息 —— 管理员操作
    .get('/profile/:id', ownerController.getOwnerItem)               // 获取车主详细信息
    .get('/profile/edit', ownerController.editOwner)              // 修改车主信息
    .post('/profile/edit', ownerController.editOwner)             // 修改车主信息

module.exports = routes;