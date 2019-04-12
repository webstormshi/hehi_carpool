const dbUtil = require('../../utils/db-util')

const owner = {

    async insert(model) {
        let result = await dbUtil.insertData('owner_info', model)
        return result
    },

    async getOwnerList () {
        let _sql = 'SELECT * FROM owner_info'
        let result = await dbUtil.query(_sql, {})
        return result
    },

    async getOwnerByUid( model ) {
        let _sql = `SELECT * FROM owner_info where uid = '${model.uid}'`
        let result = await dbUtil.query(_sql, '*')
        return result
    },

    async getOwnerByOid( model ) {
        let _sql = `SELECT * FROM owner_info where o_id = '${model.oid}'`
        let result = await dbUtil.query(_sql, '*')
        return result[0]
    },

    async updateOwner ( model ) {
        let _sql = `UPDATE owner_info SET ? where o_id = ${model.o_id}`
        let result = await dbUtil.query(_sql, model)
        return result
    }
}

module.exports = owner;