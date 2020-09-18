import fetch from '@system.fetch'

function request(obj) {
    obj.responseType = obj.dataType
    delete obj.dataType
    fetch.fetch(obj)
}
export {
    request
}