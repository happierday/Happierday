const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/userProfile');
const Verify = require('../models/verify');
const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/:hash',(req,res) => {
    if(!req.params.hash){
        res.json({success: false, message: 'ID is not provided'})
    }else{
        Verify.findOne({hash:req.params.hash},(err,verify) =>{
            if(err){
                res.json({success: false, message: err})
            }else{
                if(verify){
                    User.findByIdAndUpdate(verify.id,{ $set: { active: true }},(err,user) =>{
                        if(err){
                            res.json({success: false, message: err})
                        }else{
                            if(user){
                                const token = jwt.sign({userId: user._id},config.secret,{ expiresIn: '10h' });
                                res.json({success: true, message: 'Account Resigtered! Please Log In!',token:token,username:user.username});
                            }else{
                                res.json({success: false, message: 'User account does not exist'});
                            }
                        }
                    })
                    Verify.remove({hash: req.params.hash},(err) =>{
                        if(err){
                            res.json({success: false, message: err});
                        }
                    })
                }else{
                    res.json({success: false, message:'Link expired!'});
                }
            }
        })
    }
})

module.exports = router;

