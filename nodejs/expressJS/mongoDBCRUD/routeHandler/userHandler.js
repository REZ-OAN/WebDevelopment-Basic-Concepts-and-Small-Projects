// dependencies
const express = require('express');
const router = express.Router();
const userSchema = require('../schemas/userSchema');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// creating a model
// .model(model_name,schema)
// we map object using the model
const User = new mongoose.model("User",userSchema); // this returns a class


// sign up 
router.post('/signup',async(req,res) =>{
   try {
        
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        const newUser = new User({
            name : req.body.name,
            username : req.body.username,
            email : req.body.email,
            password: hashedPassword,
            status : req.body.status,
        });
        await newUser.save();
        res.status(200).json({
            message : "SignUp Successfull"
        });
   } catch (err) {
    res.status(500).json({
        error: err.message,
    });
   }
});

// sign in
router.post('/signin',async(req,res) =>{
    try {
        const userEmail = req.body.email;
        const userInfo = await User.find({status:'active',email:userEmail});
        if(userInfo){
            const userPass = req.body.password;
            const isValid =  await bcrypt.compare(userPass,userInfo[0].password);
            console.log(isValid);
            if(isValid){
                const token = jwt.sign({
                    username : userInfo[0].username,
                    userId : userInfo[0]._id,
                },process.env.JWT_SECRET,{expiresIn: '1h',
            });
                res.status(200).json({
                    message : "Login Successful",
                    token,
                });
            }else {
                res.status(401).json({
                    message : "Authentication Failed",
                    
                });
            }
        }else{
            res.status(401).json({
                message : "Authentication Failed",
                
            });
        }
        
   } catch (err) {
    res.status(401).json({
        error: err.message,
    });
   }
});

// exporting the router
module.exports = router;


