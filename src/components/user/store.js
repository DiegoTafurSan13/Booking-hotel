const Model = require('./model');

async function getUser(name){
    let filterUser = {};
    if (name !== null) {
        filterUser ={
            firtsname:name
        };
    } 
    const users = await Model.find(filterUser);
    return users;
};
async function addUser(userAccount){
    const user = new Model(userAccount);
    user.password = user.encrypPassword(user.password);
    return await user.save();
}  
async function updateUser(id,userAccount){
    const foundUser = await Model.findById({
        _id:id
    });
    foundUser.firtsname = userAccount.firtsname;
    foundUser.lastname = userAccount.lastname;
    foundUser.phone = userAccount.phone;
    foundUser.email = userAccount.email;
    foundUser.localization = userAccount.localization;
    foundUser.address = userAccount.address;
    foundUser.cardnumber = userAccount.cardnumber;
    foundUser.typeuser = userAccount.typeuser;

    if(!foundUser.matchPassword(userAccount.password)){
        foundUser.password = foundUser.encrypPassword(userAccount.password);
    }

    return await foundUser.save();
}
async function deleteUser(id){
    return await Model.deleteOne({
        _id:id
    });
}

module.exports = {
    get    : getUser,
    add    : addUser,
    update : updateUser,
    delete : deleteUser
};