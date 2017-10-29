const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/userProfile');

const router = express.Router();

router.use((req,res,next) => {
    const token = req.headers.authtoken;
    if(token){
        jwt.verify(token,config.secret,(err, decoded) => {
            if(err){
                res.json({success: false, message: err});
            }else{
                req.decoded = decoded;
                next();
            }
        })
    }else{
        res.json({success: false, message: 'No token provided!'});
    }
})

router.get('/:username',(req,res) => {
    User.findById(req.decoded.userId,(err,user) =>{
        if(err){
            res.json({success: false, message: err});
        }else{
            if(user){
                if(user.active){
                    res.json({success: true, username:user.username,email:user.email});
                }else{
                    res.json({success: false, message: 'Please verify your account first throught the link in your email inbox!'});
                }    
            }else{
                res.json({success: false, message: 'User not found!'});
            }
        }
    })
})

module.exports = router;
