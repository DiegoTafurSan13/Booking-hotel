const Model = require('./model');

async function getLocalization(country){
    let filterLocalization = {};
    if (country !== null) {
        filterLocalization = {
            country:country
        };
    }
    return await Model.find(filterLocalization);
}

async function addLocalization(localization){
    const Localization = new Model(localization);
    return await Localization.save();
}

async function updateLocalization(id,localization){
    const foundLocalization = await Model.findById({
        _id:id
    });
    foundLocalization.country = localization.country;
    foundLocalization.department = localization.department;
    foundLocalization.province = localization.province;
    foundLocalization.district = localization.district;

    return await foundLocalization.save();
}
async function deleteLocalization(id){
    return await Model.deleteOne({
        _id:id
    });
}
module.exports = {
    get:getLocalization,
    add:addLocalization,
    update:updateLocalization,
    delete:deleteLocalization
};