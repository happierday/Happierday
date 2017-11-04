const User = require('../models/userProfile');
const Verify = require('../models/verify');
const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const mailer = require('nodemailer');
const crypto = require('crypto');
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
                    password: req.body.password,
                    active: false
                });
                
                let verify = new Verify({
                    hash: crypto.randomBytes(20).toString('hex'),
                    id: user._id
                });
                verify.save((err) =>{
                    if(err) return err;
                })
                
                user.save((err)=>{
                    if(err){
                        if(err.code === 11000){
                            res.json({success: false, message: 'Username or Email already exists!'});
                        }else{
                            if(err.errors){
                                if(err.errors.email){
                                    res.json({success: false, message: err.errors.email.message});
                                }else{
                                    if(err.errors.username){
                                        res.json({success: false, message: err.errors.username.message});
                                    }else{
                                        if(err.errors.password){
                                            res.json({success: false, message: err.errors.password.message});
                                        }
                                    }
                                }
                            }else{
                                res.json({success: false, message: 'can not save user!'});
                            }
                        }
                    }
                    
                    //verify email
                    const gmailTrans = mailer.createTransport({
                        service:  'Gmail',
                        auth:  {
                            user: 'happierdaywu26@gmail.com',
                            pass: 'wu134679'
                        }
                    })
                    //deployment
                    //const link = 'https://happierday.herokuapp.com/#/verify/' + verify.hash;
                    //development
                    const link = 'http://localhost:4200/verify/' + verify.hash;
                    const mailOptions  = {
                        from:'happierday',
                        to: user.email,
                        subject: 'Please comfirm you Email for Happierday',
                        html : 'Hello,'+user.username+'<br> Please Click on the link to verify your email.<br><a href='+link+'>Click here to verify</a>'
                    };
                    gmailTrans.sendMail(mailOptions,function(err,response) {
                        if(err){
                            res.json({success:false,message:'Please provide a real email!'})
                        }else{
                            res.json({success:true,message:'Please verify your email by clicking the link in your email inbox!',hash:verify.hash})
                        }
                        return;
                    })
                })
            }
        }
    }
})

module.exports = router;
