const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        reqired:true
    },
    email:{
        type:String,
        reqired:true
    },
    password:{
        type:String,
        reqired:true
    },
    date:{
        type:Date,
        default:Date.now
    },
});

module.exports= mongoose.model('user',UserSchema);

