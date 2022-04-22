 const express = require('express');
 const router = express.Router();
 const path = require('path');

// import express from 'express';
// import mongoose from 'mongoose';
// import path from 'path';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import  config  from 'config';
// import { check, validationResult } from 'express-validator';
// import userSchema from '../models/user.js'


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
//const normalize = require('normalize-url');

const userSchema = require('../models/user.js');


router.post(
  '/',
  check('Name', 'Name is required').exists(),
  check('Username', 'Please include a valid email').exists(),
  check(
    'Password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  async (req, res) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }

    const  name = req.body.Name;
    const username = req.body.Username;
    const password  = req.body.Password;
    console.log(name,username,password);

    try {
      let user = await userSchema.findOne({ Username : username });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

    //   const avatar = normalize(
    //     gravatar.url(email, {
    //       s: '200',
    //       r: 'pg',
    //       d: 'mm'
    //     }),
    //     { forceHttps: true }
    //   );

      user = new userSchema({
        Name : name,
        Username :username,
        Password:password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
         user: {
           id: user.id
         }
       };

      jwt.sign(
        payload,
        'jwtSecret',

        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
     );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router ;