const {Schema,model} = require('mongoose');

const mySchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    money:{
        type:Schema.Types.Decimal128,
        require:false
    },
    mount:{
        type:Schema.Types.Decimal128,
        require:false
    }
},
{
    timestamps:true
});

module.exports = model('coinpurse',mySchema);