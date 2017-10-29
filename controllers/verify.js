const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/userProfile');

const router = express.Router();

router.get('/:id',(req,res) => {
    if(!req.params.id){
        res.json({success: false, message: 'ID is not provided'})
    }else{
        User.findById(req.params.id,(err,user) =>{
            if(err){
                res.json({success: false, message: err})
            }else{
                if(user){
                    user.active = true;
                    const token = jwt.sign({userId: user._id},config.secret,{ expiresIn: '10h' });
                    res.json({success: true, message: 'Account Resigtered!',token:token});
                }else{
                    res.json({success: false, message:'Error!'});
                }
            }
        })
    }
})

module.exports = router;

