const userService = require('../../services/hehi/user')
const userCode = require('../../codes/user')
const { getResult } = require('../../utils/req-result');
module.exports = {

    /**
     *
     * 用户注册
     * @param {*} ctx
     */
    async signUp ( ctx ) {
        switch ( ctx.method ) {
            case 'GET':
                await ctx.render('user_signUp', {
                    title: '用户注册'
                })
                return;
            case 'POST':
                let formdata = ctx.request.body
                let regResult = await userService.registerUser( formdata )
                ctx.body = await getResult(regResult, '用户注册失败');
                return;
            default:
                break;
        }
    },

     /**
     *
     * 获取所有用户列表 —— 管理员权限
     * @param {*} ctx
     */
    async getUserList ( ctx ) {
        let listResult = await userService.getUserList()
        ctx.body = await getResult(listResult, '获取用户列表失败');
    },

     /**
     *
     * 获取用户信息
     * @param {*} ctx
     */
    async getUserInfo ( ctx ) {
        let id = ctx.params.id
        let detailResult = await userService.getUserInfo( id )
        ctx.body = await getResult(detailResult[0], '获取用户信息失败');
    },

     /**
     *
     * 获取用户微信信息
     * @param {*} ctx
     */
    async getWXInfo ( ctx ) {
        let data = ctx.params.body       // data为加密的数据 code iv entcydata 
        let infoResult = await userService.getWXInfo( data )
        ctx.body = await getResult(infoResult[0], '获取用户微信信息失败');
    },

     /**
     *
     * 获取用户微信电话
     * @param {*} ctx
     */
    async getWXPhone ( ctx ) {
        let data = ctx.params.body       // data为加密的数据 code iv entcydata 
        let phoneResult = await userService.getWXPhone( data )
        ctx.body = await getResult(phoneResult, '获取用户微信电话失败');
    },

     /**
     *
     * 修改用户信息
     * @param {*} ctx
     */
    async updateInfo ( ctx ) {
        
        let id = ctx.params.id
        let userInfo = await userService.getUserInfo( id )
        console.log('userInfo', userInfo);
        if ( ctx.method === 'GET' ) {
            await ctx.render('user_update', {
                title: '修改用户信息',
                userInfo: userInfo[0]
            })
            return
        }

        let formdata = ctx.request.body
        formdata.uid = id
        let infoResult = await userService.updateInfo( formdata )
        ctx.body = await getResult(infoResult, '获取用户微信电话失败');
    }
}