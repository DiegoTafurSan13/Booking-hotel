const Model = require('./model');

async function getPayment(id,date){
    let filterPayment = {};
    if (id !== null || date !== null) {
        filterPayment = {
            _id:id,
            date:date
        };
    }
    return await Model.find(filterPayment);
}

module.exports = {
    get:getPayment
};