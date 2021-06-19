const {Schema,model} = require('mongoose');

const mySchema = new Schema({
    room:{
        type:Schema.Types.ObjectId,
        ref:'room'
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    entrydate:{
        type:Schema.Types.Date,
        require:true
    },
    outdate:{
        type:Schema.Types.Date,
        require:true
    },
    numberadult:{
        type:Number,
        require:true,
    },
    numberchildren:{
        type:Number,
        require:true
    }
},
{
    timestamps:true
});

module.exports = model('reserve',mySchema);