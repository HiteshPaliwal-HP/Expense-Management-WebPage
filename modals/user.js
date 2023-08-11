const mongooes = require('mongoose');

//schema design

const userSchema = new mongooes.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
    },
    email:{
        type:String,
        required:[true,"Email required and should be unique"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
},
{timestamps:true});


//export

const userModel = mongooes.model('users',userSchema);
module.exports = userModel;