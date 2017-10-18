const User = require('../models/userProfile');
const express = require('express');

const router = express.Router();

router.post('/',(req,res)=>{
    if(!req.body.email){
        res.json({success: false, message: 'You must provide an email'});
    }else{
        if(!req.body.username){
            res.json({success:  false, message: 'You must provide a username'});
        }else{
            if(!req.body.password){
                res.json({success: false, message: 'You must provide a password'});
            }else{
                let user = new User({
                    email: req.body.email.toLowerCase(),
                    username: req.body.username.toLowerCase(),
                    password: req.body.password
                });
                user.save((err)=>{
                    if(err){
                        res.json({success: false, message: 'Can not save to database! '});
                    }else{
                        res.json({success: false, message: 'Saved to database! '});
                    }
                })
            }
        }
    }
})


module.exports = router;
