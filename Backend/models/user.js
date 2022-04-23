const mongoose=require('mongoose')
const validator= require('validator')
const bcrypt=require('bcryptjs')
const jwt= require('jsonwebtoken')

const userschema=  new mongoose.Schema({
    name:{
        type: String,
        required: true,
       // trim: true,
        lowercase: true
    },
    age:{
       type: Number,
       //default: 0 
    },
    blood_group:{
      type:String,
      required:true,
    },
    userID:{
        type: String,
        required:true,
        unique:true,
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
    phone_number:{
        type: Number,
        minLength:7,
        //default: 0 
     },
    tokens: [{
        token:{
            type:String,
            required:true
        }
    }],
    
},
{timestamps: true})

// userschema.methods.toJSON=function(){
//     const temp= this.toObject()
//     delete temp.tokens
//     delete temp.password
//     return temp
// }
//  userschema.statics.findByCredentials= async (email,password)=> //model method
// {
//     const temp=await user.findOne({email})
//     if(!temp)
//       { 
//           throw new Error('unable to login')
//         }
//           const ismatch = await bcrypt.compare(password,temp.password)
//      if(!ismatch)
//           throw new Error('unable to login')
//     return temp
// }
// userschema.methods.generatetoken = async function(){ //instance method //arrow function is not made since it doesn't has access to this  
//     try{
//      const token= await jwt.sign({_id:this._id.toString()},'thisismynewcourse',{expiresIn:"7 days"})
//      this.tokens=this.tokens.concat({token})
//        this.save()
//      return token
//     }
//     catch(e){
//         console.log(e)
//         return e
//     }
// } 
// userschema.pre('save',async function(next){

//     if(this.isModified('password'))
//        this.password= await bcrypt.hash(this.password,8)
//     next()
// })
// userschema.pre('remove',async function(next){
//     await task.deleteMany({owner:this._id})
//     next()
// })

userschema.index({location_coordinates: '2dsphere'});  

const user= mongoose.model('users',userschema);
module.exports=user;

/*
{
    "name":"Mahak Rawat",
    "age": "21",
    "blood_group":"B+",
    "email":"mahakrawat19@gmail.com",
    "location":"Allahabad U.P. 211004",
}
*/