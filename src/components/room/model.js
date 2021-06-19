const {Schema,model}= require('mongoose');

const mySchema = new Schema({
    hotel:{
        type:Schema.Types.ObjectId,
        ref:'hotel'
    },
    capacity:{
        type:Number,
        require:true
    },
    typerooms:{
        type:String,
        require:true
    },
    numberbed:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
},
{
    timestamps:true
});

module.exports = model('room',mySchema);