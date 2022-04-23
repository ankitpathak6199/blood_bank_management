import mongoose from 'mongoose';


const Blood_bank_Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    bankId:{
        type: String,
        required:true,
        unique:true,
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
              required:true,
          }
    }],
    donation_drives:[{
        _id:{
            type:String,
            required:true,
        }
    }]
},{timestamps: true});

 const Blood_bank_model = mongoose.model('Blood_bank_model', Blood_bank_Schema);
 export default Blood_bank_model;