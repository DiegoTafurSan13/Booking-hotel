const {Schema,model} = require('mongoose');
const bcrypt = require('bcryptjs');

const mySchema = new Schema({
    firtsname :{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    localization:{
        type:Schema.ObjectId,
        ref:'localization'
    },
    address:{
        type:String,
        require:true
    },
    cardnumber:{
        type:String,
        require:false
    },
    password:{
        type:String,
        required:true
    },
    typeuser:{
        type:String,
        require:true
    }
},
{
    timestamps:true
});

mySchema.methods.encrypPassword = async (password)=>{
    const salt = bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
};
mySchema.methods.matchPassword = async (password)=>{
    return await bcrypt.compare(password,this.password);
};

module.exports = model('user',mySchema);