const userModel = require('../../models/hehi/user')
const userCode = require('../../codes/user')
const wxMiddleware = require('../../middlewares/wechat')

const user = {

    /**
     *
     * 用户注册
     * @param {*} user
     * @returns
     */
    async registerUser ( user ) {
        let result = {}
        let res = await userModel.insert({
            username: user.username,
            nickname: user.nickname,
            gender: user.gender,
            mobile: user.mobile,
            openid: user.openid,
            avatar: user.avatar,
            wechat: user.wechat,
            home: user.home,
            company: user.company,
            role: user.role,
            status: user.status
        })
        if (res.protocol41) {
            result = await userModel.getUserByOpenId({ openid: user.openid })
        }
        return result
    },

    /**
     * 
     * 获取所有用户列表 —— 管理员权限
     * @returns
     */
    async getUserList () {
        let result = await userModel.getUserList()
        return result
    },

    /**
     *
     * 获取用户信息
     * @param {*} id
     * @returns
     */
    async getUserInfo ( id ) {
        let result = await userModel.getUserInfo({uid: id})
        return result
    },

    /**
     *
     * 获取用户微信信息
     * @param {*} data
     * @returns
     */
    async getWXInfo ( data ) {
        let result = await wxMiddleware.decode( data )
        return result
    },

    /**
     *
     * 获取用户微信电话
     * @param {*} data
     * @returns
     */
    async getWXPhone ( data ) {
        let result = await wxMiddleware.decode( data )
        return result
    },

    /**
     *
     * 修改用户信息
     * @param {*} user
     * @returns
     */
    async updateInfo ( user ) {
        let result = {}
        let res = await userModel.updateInfo({
            uid: user.uid,
            username: user.username,
            nickname: user.nickname,
            gender: user.gender,
            mobile: user.mobile,
            openid: user.openid,
            avatar: user.avatar,
            wechat: user.wechat,
            home: user.home,
            company: user.company,
            role: user.role,
            status: user.status
        })

        if (res.protocol41) {
            result = await userModel.getUserByOpenId({ openid: user.openid })
        }

        return result
    }
}

module.exports = user