const mongoose = require('mongoose'); // Erase if already required
//!mdbgum
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        unique:false,
    },
    lastname:{
        type:String,
        required:true,
        unique:false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        required:true,  
    }
});

//Export the model
module.exports = mongoose.model('User', userSchema, "Registrations");