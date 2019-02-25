const dbUtil = require('../../utils/db-util')

const user = {

    /**
     *
     * 用户注册
     * @param {*} model
     * @returns
     */
    async insert( model ) {
        let result = await dbUtil.insertData('user_info', model)
        return result
    },

    /**
     *
     * 获取所有用户列表 —— 管理员权限
     * @returns
     */
    async getUserList () {
        let _sql = 'SELECT * FROM user_info'
        let result = await dbUtil.query(_sql, {})
        return result
    },

    /**
     *
     * 通过openid查找用户信息
     * @param {*} model
     * @returns
     */
    async getUserByOpenId ( model ) {
        let _sql = `SELECT * FROM user_info where openid = '${model.openid}'`
        let result = await dbUtil.query(_sql, '*')
        return result
    },

    /**
     *
     * 获取用户信息
     * @param {*} model
     * @returns
     */
    async getUserInfo ( model ) {
        let _sql = `SELECT * FROM user_info WHERE uid = ${model.uid}`
        console.log('_sql', _sql)
        let result = await dbUtil.query(_sql, '*')
        return result
    },

    /**
     *
     * 修改用户信息
     * @param {*} model
     * @returns
     */
    async updateInfo ( model ) {
        let _sql = 'UPDATE user_info SET ? WHERE uid = ?'
        let result = dbUtil.query(_sql, [ model, model.uid ])
        return result
    }
}

module.exports = user