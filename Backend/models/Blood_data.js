const mongoose = require('mongoose');


const Blood_data_schema= new mongoose.Schema({
    blood_group:{
        type: String,
        required: true,
    },
    bloodId:{
        type: String,
        required:true,
        unique:true,
    },
    user:{
        type:String,
        unique: true,
        required: true, 
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
    driveId: {
        type:String,
        unique: true,
        required: true,
    }
    
},{timestamps: true});

 const Blood_data_model = mongoose.model('Blood_data_model', Blood_data_schema);
 export default Blood_data_model;