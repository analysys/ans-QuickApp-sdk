import device from "@system.device";

function systemPromise () {

    let promist = new Promise(function (resolve, reject) {
        device.getInfo({
            success: function (res) {
                let deviceInfo = {
                    brand: res.brand,
                    model: res.model,
                    screenWidth: res.screenWidth,
                    screenHeight: res.screenHeight,
                    language: res.language,
                    version: res.platformVersionCode + "",
                    browser: res.platformVersionName,
                    system: res.osType + ' ' + res.osVersionName
                }
                resolve(deviceInfo)
            },
            fail: function (res) {
                let deviceInfo = {
                    brand: '',
                    model: '',
                    screenWidth: '',
                    screenHeight: '',
                    language: '',
                    version: '',
                    system: ''
                }
                resolve(deviceInfo)
            }
        })
    }).catch((e) => { })
    return promist
}

export {
    systemPromise
}