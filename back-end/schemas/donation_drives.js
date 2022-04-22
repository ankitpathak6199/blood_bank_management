import mongoose from 'mongoose';


const Donation_drive_schema= new mongoose.Schema({
    drive_id:{
        type: String,
        required: true,
    },
    number_of_donations:{
        type:Number,
        required:true,
        default:0,
    },
    blood_ids:[{
        type:String,
        required:true
    }]
    
},{timestamps: true});

 const Donation_drive_model = mongoose.model('Donation_drive_model', Donation_drive_schema);
 export default Donation_drive_model;