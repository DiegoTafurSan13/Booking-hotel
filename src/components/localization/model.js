const {Schema,model} = require('mongoose');

const mySchema = new Schema({
    country:{
        type:String,
        require:true
    },
    department:{
        type:String,
        require:true
    },
    province:{
        type:String,
        require:true
    },
    district:{
        type:String,
        require:true
    }
},
{
    timestamps:true
});

module.exports = model('localization',mySchema);