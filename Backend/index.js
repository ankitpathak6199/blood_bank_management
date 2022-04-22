import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';


const app=express();
dotenv.config();
app.use(cors);


 mongoose.connect(process.env.DB_CONNECT,{useUnifiedTopology: true}).then(()=>{
  console.log('connected')}).catch((e)=>{
      console.log(e)
  })

 app.use(express.json()); // express.json() convert the incoming json data(only) into object eg {"name":"mahak rawat"} to {name: mahak rawat}

 app.get('/',(req,res)=>{
    res.send('Server is up');
 })
 const port= process.env.PORT;
 console.log(port);
 app.listen(port,"localhost",()=>{
     console.log(`server is up on ${port}`);
 })