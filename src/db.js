const db = require('mongoose');

db.Promise = global.Promise;

async function connect (URI){
    await db.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(data=>{
        console.log("[Success] database connect");
    })
    .catch(err=>{
        console.error("[Error] connect failed");
    });
}
module.exports = connect;