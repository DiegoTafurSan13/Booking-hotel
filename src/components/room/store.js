const Model = require('./model');

async function getRooms(idHotel){
    let filterRooms = {};
    if (idHotel !== mull) {
        filterRooms = {
            _id:idHotel
        };
    }
    
    return await Model.find(filterRooms);

}

async function addRooms(room){
    const hotelRoom = new Model(room);
    return await hotelRoom.save();
    
}

async function updateRooms(id,room){
    const foundRooms = await Model.findById({
        _id:id
    });
    foundRooms.hotel = room.hotel;
    foundRooms.capacity = room.capacity;
    foundRooms.typerooms = room.typerooms;
    foundRooms.numberbed = room.numberbed;
    foundRooms.price = room.price;

    return await foundRooms.save();
}

async function deleteRooms(id){
    return await Model.deleteOne({
        _id:id
    });
}
module.exports = {
    get   :getRooms,
    add   :addRooms,
    update:updateRooms,
    delete:deleteRooms
};