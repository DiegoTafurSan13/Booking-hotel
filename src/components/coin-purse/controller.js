const store = require('./store');

function getCoinPurse(user){
    return new Promise((resolve,reject)=>{
        const res = store.get(user);
        resolve(res);
    });
}
function addCoinPurse(coinPurse){
    return new Promise((resolve,reject)=>{
        if (!coinPurse) {
            reject('[ADD COIN] Object is null');
        }
        const res = store.add(coinPurse);
        resolve(res);
    });
}

function updateCoinPurse(id,coin){
    return new Promise((resolve,reject) =>{
        if (!coin) {
            reject('[UPDATE COIN] Object is null');
        }
        const coinPurse = {
            user : coin.user,
            money: coin.money,
            mount: coin.mount
        };
        const res = store.update(id,coinPurse);
        resolve(res);
    })
}

function deleteCoinPurse(id){
    return new Promise((resolve,reject) =>{
        const res = store.delete(id);
        resolve(res);
    });
}

module.exports = {
    get   : getCoinPurse,
    add   : addCoinPurse,
    update: updateCoinPurse,
    delete: deleteCoinPurse
};