const {Schema,model} = require('mongoose');

const mySchema = new Schema({
    reserve:{
        type:Schema.Types.ObjectId,
        ref:'reserve'
    },
    mount:{
        type:Schema.Types.Number,
        require:true
    },
    date:{
        type:Schema.Types.Date,
        require:true
    }

},
{
    timestamps:true
});

module.exports = model('payment',mySchema);