const ownerModel = require('../../models/hehi/owner');

const owner = {

    async addOwner( owner ) {
        let result = {};
        let res = await ownerModel.insert({
            uid: owner.uid,
            car_no: owner.car_no,
            car_type: owner.car_type,
            car_color: owner.car_color,
            car_avatar: owner.car_avatar,
            am_star_time: owner.am_star_time,
            pm_star_time: owner.pm_star_time,
            car_load: Number(owner.car_load)|| 0,
            verified: 0   //  0审核中  1审核通过 2审核驳回
        });
        if(res.protocol41) {
            result = await ownerModel.getOwnerByUid({ uid: owner.uid });
        }
        return result[0];
    },

    async getOwnerList() {
        let result = await ownerModel.getOwnerList()
        return result
    },

    async getOwnerItem( id ) {
        let result = await ownerModel.getOwnerByOid({oid: id})
        return result
    },

    async editOwner( owner ) {    // 无法进行数据的修改
        let result = {};
        let res = await ownerModel.updateOwner({
            o_id: owner.o_id,
            car_no: owner.car_no,
            car_type: owner.car_type,
            car_color: owner.car_color,
            car_avatar: owner.car_avatar,
            am_star_time: owner.am_star_time,
            pm_star_time: owner.pm_star_time,
            car_load: Number(owner.car_load)
        })
        if(res.protocol41) {
            result = await ownerModel.getOwnerByOid({oid: owner.o_id})
        }
        return result
    },

    async verifyOwner( owner ) {
        let result = {};
        let res = await ownerModel.updateOwner({
            o_id: owner.o_id,
            verified: owner.verified,
            verified_desc: owner.verified_desc
        })
        if(res.protocol41) {
            result = await ownerModel.getOwnerByOid({oid: owner.o_id})
        }
        return result
    }
}

module.exports = owner