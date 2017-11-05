const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/userProfile');

const router = express.Router();

router.use((req,res,next) => {
    const token = req.headers.authtoken;
    if(token){
        jwt.verify(token,'secret',(err, decoded) => {
            if(err){
                res.json({success: false, message: err});
            }else{
                req.decoded = decoded;
            }
        })
    }
    next();
})

router.get('/:username',(req,res) => {
    User.findOne({username:req.params.username},(err,user) =>{
        if(err){
            res.json({success: false, message: err});
        }else{
            if(user){
                if(req.decoded){
                    if(user._id == req.decoded.userId){
                        res.json({username:user.username,email:user.email,auth:true});
                    }else{
                        res.json({username:user.username,email:user.email,auth:false});
                    }
                }else{
                    res.json({username:user.username,email:user.email,auth:false});
                }
            }else{
                res.json({success: false, message: 'User not found!'});
            }
        }
    })
})

module.exports = router;
