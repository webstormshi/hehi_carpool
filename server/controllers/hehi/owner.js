const ownerService = require('../../services/hehi/owner');
const { getResult } = require('../../utils/req-result');

module.exports = {

    async addOwner( ctx ) {
        switch (ctx.method) {
            case 'GET':
                await ctx.render('owner/add_owner', {
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
        let listResult = await ownerService.getOwnerList();
        ctx.body = await getResult(listResult, '获取车主列表失败');
    },

    async getOwnerItem ( ctx ) {
        let id = ctx.params.id;
        let itemResult = await ownerService.getOwnerItem(id);
        ctx.body = await getResult(itemResult, '获取车主信息失败');
    },

    async editOwner( ctx ) {
        switch (ctx.method) {
            case 'GET':
                let id = ctx.params.id;
                let itemResult = await ownerService.getOwnerItem(id);
                await ctx.render('owner/update_owner', {
                    title: '修改车主信息',
                    owner: itemResult
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
    },

    async verifyOwner( ctx ) {
        switch (ctx.method) {
            case 'GET':
                let id = ctx.params.id;
                let itemResult = await ownerService.getOwnerItem(id);
                await ctx.render('owner/verify_owner', {
                    title: '修改车主信息',
                    owner: itemResult
                });
                break;
            case 'POST':
                let formdata = ctx.request.body || ctx.request.params;
                let verifyResult = await ownerService.verifyOwner( formdata );
                ctx.body = await getResult(verifyResult, '审核车主信息失败');
            default:
                break;
        }
    }
}