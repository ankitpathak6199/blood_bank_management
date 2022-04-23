// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';

const express = require('express');
 const path = require('path');
 //var cors = require('cors');
 const mongoose = require('mongoose');
 const dotenv = require('dotenv');
// const router = express.Router();
//const cors = require('cors');



const app=express();
dotenv.config();
//app.use(cors);

const register = require('./routes/register');
//import register from './routes/register.js';


 mongoose.connect(process.env.DB_CONNECT,{useUnifiedTopology: true}).then(()=>{
  console.log('connected')}).catch((e)=>{
      console.log(e)
  })

  app.get('/',(req,res)=>{
      console.log("yewala");
      res.send("hello");
  })
  app.use(express.json());
  app.use("/register",register);
  // express.json() convert the incoming json data(only) into object eg {"name":"mahak rawat"} to {name: mahak rawat}

//  app.get('/',(req,res)=>{
//     res.send('Server is up');
//  })

 app.listen(4000,()=>{
     console.log(`server is up on `);
 })