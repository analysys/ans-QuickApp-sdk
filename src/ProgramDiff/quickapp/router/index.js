import router from "@system.router";
import app from "@system.app";
let pathArray = []
/**
 * 返回对应场景值
 * @returns {String} scene 场景值
 */

function getScene () {
    let appInfo = app.getInfo()
    return typeof appInfo == 'object' && typeof appInfo.source == 'object' ? (appInfo.source.type || '') : ''
}
/**
 * 返回包名
 * @returns {String} packageName 包名
 */
function getPackageName () {
    let appInfo = app.getInfo()

    return typeof appInfo == 'object' && typeof appInfo.source == 'object' ? (appInfo.source.packageName || '') : ''
}

function getPath () {
    let state = router.getState()
    let path = typeof state == 'object' ? state.path : ''
    pathArray.push(path)
    // 防止pathArray 过长，对pathArray 进行一些 长度 检查和减少
    if (pathArray.length > 5) {
        pathArray.shift()
    }
    return path
}

function getTitle () {
    let state = router.getState()
    return typeof state == 'object' ? state.name : ''
}

function getReferer () {
    if (pathArray.length >= 1) {
        return pathArray[pathArray.length - 1]
    }
    return getScene()
}
export {
    getScene,
    getPackageName,
    getPath,
    getTitle,
    getReferer
}