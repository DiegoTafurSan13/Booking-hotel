const Store = require('./store');

function getLocalization(country){
    return new Promise((resolve,reject)=>{
        const foundLocalization = Store.get(country);
        resolve(foundLocalization);
    });
}
function addLocalization(localization){
    return new Promise((resolve,reject) =>{
        if (!localization) {
            reject('[addLocalization] : object is null');
        }
        resolve(Store.add(localization));
    });
}

function updateLocalization(id,localization){
    return new Promise((resolve,reject)=>{
        if (!localization) {
            reject('[updateLocalization] : object is null');
        }
        resolve(Store.update(id,localization));
    });
}
function deleteLocalization(id){
    return new Promise((resolve,reject)=>{
        if (!id) {
            reject('[deleteLocalization] : ID is null, please insert');
        }
        resolve(Store.delete(id));
    });
}

module.exports = {
    get:getLocalization,
    add:addLocalization,
    update:updateLocalization,
    delete:deleteLocalization
};