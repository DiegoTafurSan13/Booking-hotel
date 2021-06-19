const Model = require('./model');

async function getReserve(idReserve,entry,out){
    let filterReserve = {};
    if (idReserve !== null ||entry !== null ||out !== null) {
        filterReserve = {
            _id:idReserve,
            entrydate:entry,
            outdate:out
        };
    }
    return await Model.find(filterReserve);
}

module.exports = {
    get:getReserve
};