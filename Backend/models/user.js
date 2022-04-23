const mongoose = require('mongoose');
//import mongoose from 'mongoose';

const UserSchema =  new mongoose.Schema({

    Name: {
        type: String,
        required: true,

    },
    Username: {
        type : String,
        required : true,
    }, 
    Password: {
        type : String,
        required : true,
    }, 
    
    
  
    
    
});
//export default UserSchema;
module.exports = mongoose.model('userSchema',UserSchema);