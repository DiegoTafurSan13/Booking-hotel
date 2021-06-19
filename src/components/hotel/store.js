const Model = require('./model');

async function getHotel(filter){

    let filteHotel = {};
    if (filter.name !== null && filter.localization == null && filter.calification == null) {
        filteHotel = {
            name : filter.name
        }
    }else if (filter.name == null && filter.localization !== null && filter.calification == null){
        filteHotel = {
            localization : filter.localization
        }
    }else if (filter.name == null && filter.localization == null && filter.calification !== null){
        filteHotel = {
            calification : filter.calification
        }
    }else if (filter.name == null && filter.localization !== null && filter.calification !== null){
        filteHotel = {
            localization : filter.localization,
            calification : filter.calification
        }
    }
    
    const hotel = await Model.find(filteHotel);
    return hotel;
}

async function addHotel(hotel){
    const modelHotel = new Model(hotel);
    return await modelHotel.save();
}
async function updateHotel(id,hotel){
    const foundHotel = Model.findById({
        _id:id
    });
    foundHotel.user = hotel.user;
    foundHotel.localization = hotel.localization;
    foundHotel.name = hotel.name;
    foundHotel.description = hotel.description;
    foundHotel.calification = hotel.calification;
    foundHotel.adress = hotel.adress;
    foundHotel.numberrooms = hotel.numberrooms;
    foundHotel.files= hotel.files;
    return await foundHotel.save();
}
async function deleteHotel(id){
    return await Model.deleteOne({
        _id:id
    }); 
}

module.exports = {
    get   : getHotel,
    add   : addHotel,
    update: updateHotel,
    delete: deleteHotel
};