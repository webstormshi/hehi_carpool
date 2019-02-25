
let getResult = async function(res, errmsg) {

    // 请求异常情况
    if( !res ) return { code: -1, status: 'failed', essage: errmsg }

    let result = {
        code: 0,
        status: 'success'
    };
    result.data = res
    return result;
}

module.exports = {
    getResult
}