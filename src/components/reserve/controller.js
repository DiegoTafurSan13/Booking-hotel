const store = require('./store');

function getReserve(filter) {
    return new Promise((resolve, reject) => {
        if (filter == null) {
            reject('[get] filter is null');
        }

        resolve(store.get(filter));
    });
};

function addReserve(reserve) {
    return new Promise((resolve, reject) => {
        if (reserve == null) {
            reject('[add] reserve object is null');
        }
        const bodyReserve = {
            room           :reserve.room,
            user           : reserve.user,
            entrydate      : reserve.entrydate,
            outdate        : reserve.outdate,
            numberadult    : reserve.numberadult,
            numberchildren : reserve.numberchildren
        }

        resolve(store.add(bodyReserve));
    });
};

function updateReserve(id, reserve) {
    return new Promise((resolve, reject) => {
        if (reserve == null) {
            reject('[update] reserve object is null');
        }

        resolve(store.update(id, reserve));
    });
};

function deleteReserve(id) {
    return new Promise((resolve, reject) => {
        if (id == null) {
            reject('[delete] id is null');
        }
        resolve(store.delete(id));
    });
};

module.exports = {
    get    : getReserve,
    add    : addReserve,
    update : updateReserve,
    delete : deleteReserve
};
