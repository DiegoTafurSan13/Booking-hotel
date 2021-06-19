const Store = require('./store');

function getUser(name) {
    return new Promise(
        (resolve, reject) => {
            const user = Store.get(name);
            resolve(user);
        });
}
function addUser(userAccount) {
    return new Promise(
        (resolve, reject) => {
            if (!userAccount) {
                reject('[ADD USER] Object is null');
            }
            const user = Store.add(userAccount);
            resolve(user);
        });
}
function updateUser(id,editUser) {
    return new Promise(
        (resolve, reject) => {
            if (!editUser) {
                reject('[UPDATE USER] Object is null');
            }
            const user = {
                firtsname: editUser.firtsname,
                lastname: editUser.lastname,
                phone: editUser.phone,
                email: editUser.email,
                localization: editUser.localization,
                address: editUser.address,
                cardnumber: editUser.cardnumber,
                password: editUser.password,
                typeuser: editUser.typeuser,
            };
            const res = Store.update(id, user);

            resolve(res);
        });
}
function deleteUser(id) {
    return new Promise(
        (resolve, reject) => {
            const res = Store.delete(id);
            resolve(res);
        });
}

module.exports = {
    get    : getUser,
    add    : addUser,
    update : updateUser,
    delete : deleteUser
};