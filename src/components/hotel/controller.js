const store = require('./store');

function getHotel(filter) {
    return new Promise((resolve, reject) => {
        const res = store.get(filter);
        resolve(res);
    });
}
function addHotel(hotel) {
    return new Promise((resolve, reject) => {
        if (!hotel) {
            reject('[ADD HOTEL] object is null');
        }
        const res = store.add(hotel);
        resolve(res);
    });
}
function updateHotel(id, hotel) {
    return new Promise((resolve, reject) => {
        if (!hotel) {
            reject('[UPDATE HOTEL] object is null');
        }
        const editHotel = {
            user : hotel.user,
            localization : hotel.localization,
            name : hotel.name,
            description : hotel.description,
            calification :hotel.calification,
            adress : hotel.adress,
            numberrooms : hotel.numberrooms,
            files : hotel.files
        }
        const res = store.update(id,editHotel);
        resolve(res);
    });
}
function deleteHotel(id) {
    return new Promise((resolve, reject) => {
        const res = store.delete(id);
        resolve(res);
    });
}
module.exports = {
    get: getHotel,
    add: addHotel,
    update: updateHotel,
    delete: deleteHotel
}