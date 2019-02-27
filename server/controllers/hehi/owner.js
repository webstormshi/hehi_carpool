const ownerService = require('../../services/owner');
const { getResult } = require('../../utils/req-result');

module.exports = {

    async addOwner( ctx ) {
        switch (ctx.method) {
            case 'GET':
                await render('add_owner', {
                    title: '添加车主信息'
                });
                return;
            case 'POST':
                let formdata = ctx.request.body;
                let addResult = await ownerService.addOwner( formdata );
                ctx.body = await getResult(addResult, '添加车主信息失败');
                return;
            default:
                break;
        }
    },

    async getOwnerList ( ctx ) {
        let listResult = await userService.getOwnerList();
        ctx.body = await getResult(listResult, '获取车主列表失败');
    },

    async getOwnerItem ( ctx ) {
        let itemResult = await userService.getOwnerItem();
        ctx.body = await getResult(itemResult, '获取车主信息失败');
    },

    async editOwner( ctx ) {
        switch (ctx.method) {
            case 'GET':
                await render('add_owner', {
                    title: '修改车主信息'
                });
                return;
            case 'POST':
                let formdata = ctx.request.body;
                let editResult = await ownerService.editOwner( formdata );
                ctx.body = await getResult(editResult, '修改车主信息失败');
                return;
            default:
                break;
        }
    }
}