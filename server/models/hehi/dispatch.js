const dbUtil = require('../../utils/db-util');

const dispatch = {

    async insert( model ) {
        let result = await dbUtil.insertData('dispatch_info', model)
        return result
    },

    async getDispatchByUid( model ) {
        let _sql = `SELECT * FROM dispatch_info where uid = '${model.uid}'`
        let result = await dbUtil.query(_sql, '*')
        return result
    },

    async update( model ) {
        let _sql = `UPDATE dispatch_info SET ? where o_id = ${model.o_id}`
        let result = await dbUtil.query(_sql, model)
        return result
    },

    async getScheduleList() {
        let _sql = 'SELECT * FROM dispatch_info'
        let result = await dbUtil.query(_sql, {})
        return result
    },

    async schedultInfo() {
        let _sql = `SELECT * FROM dispatch_info where uid = '${model.uid}'`
        let result = await dbUtil.query(_sql, '*')
        return result[0]
    }
}

module.export = dispatch;