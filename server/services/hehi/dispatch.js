const dispatchModel = require('../../models/hehi/dispatch')

const dispatch = {

    async publishSchedule( model ) {
        let result = {};
        let res = await dispatchModel.insert({
            uid: model.uid,
            start: model.start,
            start_location: model.start_location,
            dest: model.dest,
            dest_location: model.dest_location,
            type: model.type,
            dispatch_time: model.dispatch_time,
            empty_seat: model.empty_seat,
            status: model.status,
            introduction: model.introduction
        })
        if (res.protocol41) {
            result = await dispatchModel.getDispatchByUid({ uid: model.uid })
        }
        return result;
    },

    async editSchedule( model ) {
        let result = {};
        let res = await dispatchModel.update({
            uid: model.uid,
            start: model.start,
            start_location: model.start_location,
            dest: model.dest,
            dest_location: model.dest_location,
            type: model.type,
            dispatch_time: model.dispatch_time,
            empty_seat: model.empty_seat,
            status: model.status,
            introduction: model.introduction
        })
        if (res.protocol41) {
            result = await dispatchModel.getDispatchByUid({ uid: model.uid })
        }
        return result;
    },

    async cancelSchedule( model ) {
        
    },

    async getScheduleList( model ) {
        let result = await dispatchModel.getScheduleList({uid: model.uid})
        return result
    },

    async schedultInfo( model ) {
        let result = await dispatchModel.schedultInfo({uid: model.uid})
        return result
    }

}

module.exports = dispatch;