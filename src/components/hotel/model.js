const {Schema,model} = require('mongoose');

const mySchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    localization:{
        type:Schema.Types.ObjectId,
        ref:'localization'
    },
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    calification:{
        type:Number,
        require:false
    },
    adress:{
        type:String,
        require:true
    },
    numberrooms:{
        type:Number,
        require:true
    },
    files:{
        type:Schema.Types.Array,
        require:false
    }
},
{
    timestamps:true
});

module.exports = model('hotel',mySchema);