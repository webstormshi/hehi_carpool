const dispatchService = require('../../services/hehi/dispatch')
const { getResult } = require('../../utils/req-result');

module.exports = {

    async publishSchedule( ctx ) {
        switch (ctx.method) {
            case 'GET':
                await ctx.render('dispatch/publish', {
                    title: '发布车主开车信息'
                });
                return;
            case 'POST':
                let formdata = ctx.request.body;
                let addResult = await dispatchService.publishSchedule( formdata );
                ctx.body = await getResult(addResult, '发布车主开车信息失败');
                return;
            default:
                break;
        }
    },

    async editSchedule( ctx ) {
        switch (ctx.method) {
            case 'GET':
                await ctx.render('dispatch/edit', {
                    title: '修改车主开车信息'
                });
                return;
            case 'POST':
                let formdata = ctx.request.body;
                let editResult = await dispatchService.editSchedule( formdata );
                ctx.body = await getResult(editResult, '修改车主开车信息失败');
                return;
            default:
                break;
        }
    },

    async cancelSchedule( ctx ) {
        let listResult = await dispatchService.cancelSchedule();
        ctx.body = await getResult(listResult, '取消车主开车信息失败');
    },

    async getScheduleList( ctx ) {
        let listResult = await dispatchService.getScheduleList();
        ctx.body = await getResult(listResult, '获取车主开车信息列表失败');
    },

    async schedultInfo( ctx ) {
        let listResult = await dispatchService.schedultInfo();
        ctx.body = await getResult(listResult, '获取车主开车详情失败');
    }
}