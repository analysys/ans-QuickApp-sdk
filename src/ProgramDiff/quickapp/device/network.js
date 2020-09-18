import network from "@system.network";

function netWorkPromise() {
    let promist = new Promise(function (resolve, reject) {
        network.getType({
            success: function (res) {
                let networkType = {
                    networkType: res.type
                }
                resolve(networkType)
            },
            fail: function (res) {
                let networkType = {
                    networkType: ''
                }
                resolve(networkType)
            }
        })
    }).catch((e) => {

    })
    return promist
}

export {
    netWorkPromise
}