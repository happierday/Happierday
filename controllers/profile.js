const express = require('express');
const auth = require('./auth');
const User = require('../models/userProfile');

const router = express.Router();

auth(router);

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
