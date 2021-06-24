const Model = require('./model');

async function getReserve(filter) {
    let filterReserve = {};
    if (filter.idReserve !== null && filter.entry == null && filter.idUser == null) {
        filterReserve = {
            _id: filter.idReserve
        };
    } else if (filter.idReserve == null && filter.entry !== null && filter.idUser == null) {
        filterReserve = {
            entrydate: filter.entry
        };
    } else if (filter.idReserve == null && filter.entry == null && filter.idUser !== null) {
        filterReserve = {
            user: filter.idUser
        };
    } else if (filter.idReserve == null && filter.entry !== null && filter.idUser !== null) {
        filterReserve = {
            user: filter.idUser,
            entrydate: filter.entry
        };
    }

    return await Model.find(filterReserve);
}

async function addReserve(reserve) {

    const newModel = new Model(reserve);
    return await newModel.save();
}

async function updateReserve(id,reserve){
    const foundReserve = await Model.findById({
        _id:id
    });
    foundReserve.room = reserve.room,
    foundReserve.user= reserve.user,
    foundReserve.entrydate= reserve.entrydate,
    foundReserve.outdate = reserve.outdate,
    foundReserve.numberadult=reserve.numberadult,
    foundReserve.numberchildren = reserve.numberchildren

    return await foundReserve.save();
}

async function deleteReserve(id){
    return await Model.deleteOne({
        _id:id
    });
}

module.exports = {
    get    : getReserve,
    add    : addReserve,
    update : updateReserve,
    delete : deleteReserve
};
