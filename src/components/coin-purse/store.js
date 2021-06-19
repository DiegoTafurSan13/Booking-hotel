const Model = require('./model');

async function getCoinPurse(user){
    let filterCoinPurse = {};
    if (user !== null) {
        filterCoinPurse = {
            user:user
        };
    }
    return await Model.find(filterCoinPurse);
}

async function addCoinPurse(coinPurse){
    const modelCoin = new Model(coinPurse);
    return await modelCoin.save();
}

async function updateCoinPurse(id,coinPurse){
    const foundCoin = await Model.findById({
        _id:id
    });
    foundCoin.user = coinPurse.user;
    foundCoin.money = coinPurse.money;
    foundCoin.mount = coinPurse.mount;

    return await foundCoin.save();
}

async function deleteCoinPurse(id){
    return await Model.deleteOne({
        _id:id
    });
}

module.exports = {
    get   : getCoinPurse,
    add   : addCoinPurse,
    update: updateCoinPurse,
    delete: deleteCoinPurse
};