const mongoose = require('mongoose');
//import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({

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
module.exports = mongoose.model('userSchema',UserSchema);