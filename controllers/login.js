const User = require('../models/userProfile');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const router = express.Router();

//check password
function validatePassword (password,dbPassword){
    return bcrypt.compareSync(password,dbPassword);
}

router.post('/',(req,res)=>{
    if(!req.body.username){
        res.json({success:  false, message: 'You must provide a username'});
    }else{
        if(!req.body.password){
            res.json({success: false, message: 'You must provide a password'});
        }else{
            User.findOne({username: req.body.username.toLowerCase()},(err, user) => {
                if(err){
                    res.json({success: false, message: err});
                }else{
                    if(user){
                        if(user.active){
                            if(validatePassword(req.body.password,user.password)){
                                const token = jwt.sign({userId: user._id},config.secret,{ expiresIn: '10h' });
                                res.json({success: true, message: 'Loged In',token:token});
                            }else{
                                res.json({success: false, message: 'Password does not match'});
                            }
                        }else{
                            res.json({success: false, message: 'Please verify your account first throught the link in your email inbox!'});
                        }
                    }else{
                        res.json({success: false, message: 'No such account!'});
                    }
                }
            })
        }
    }
})

module.exports = router;
