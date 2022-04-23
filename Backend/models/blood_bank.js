const mongoose = require('mongoose');
const validator= require('validator')
const bcrypt=require('bcryptjs')
const jwt= require('jsonwebtoken')

const Blood_bank_Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        trim:true,
        minLength:7,
        // validate(value){
        //   if(value.toLowerCase().includes('password'))
        //   {throw new Error('invalid password');}
        //   }
    },
    bankId:{
        type: String,
        required:true,
        unique:true,
    },
    email:{
        type: String,
        required:true,
        trim:true,
        unique:true,
        validate(value)
        {
            if(!validator.isEmail(value))
             throw new Error('invalid email')
        }
    },
    location_coordinates: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true
    }
    },
    location:{
        state:{
           type: String,
           required:true,
        },
        city:{
           type: String,
           required:true,
        },
        pincode:{
           type: Number,
           required:true,
        }
    },
    bloodIds: [{
          _id:{
              type: String,
              required:false,
          }
    }],
    phone_number:{
        type: Number,
        minLength:7,
        //default: 0 
     },
    donation_drives:[{
        _id:{
            type:String,
            required:false,
        }
    }]
},{timestamps: true});

 const Blood_bank_model = mongoose.model('Blood_bank_model', Blood_bank_Schema);
 module.exports=Blood_bank_model;