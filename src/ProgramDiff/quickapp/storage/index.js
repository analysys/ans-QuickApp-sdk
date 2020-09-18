import storage from "@system.storage";
/**
 * [getStoragePromise description] 获取存储
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
let getStoragePromise = function (name) {
    return new Promise(function (resolve, reject) {
        try {
            storage.get({
                key: name,
                success: function (res) {
                    resolve(res)
                },
                fail: function (res) {
                    reject(res)
                }
            })

        } catch (e) {}
    }).catch(() => {})
}
/**
 * [setStoragePromise description]设置存储
 * @param {[type]} name  [description]
 * @param {[type]} value [description]
 */
let setStoragePromise = function (name, value) {
    return new Promise(function (resolve, reject) {
        if (typeof value == 'object') {
            value = JSON.stringify(value)
        }
        try {
            storage.set({
                key: name,
                value: value,
                success: function () {
                    resolve(200)
                },
                fail: function () {
                    reject(400)
                }
            })
        } catch (e) {}
    }).catch((e) => {})
}
export {
    getStoragePromise,
    setStoragePromise
}