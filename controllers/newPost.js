const Joke = require('../models/joke');
const express = require('express');
const User = require('../models/userProfile');
const auth = require('./auth');
const router = express.Router();

auth(router);

router.post('/',(req,res)=>{
    if(!req.body.username){
        res.json({success: false, message: 'Please Log In First'})
    }else{
        if(!req.body.title){
            res.json({success:  false, message: 'You must provide a title'});
        }else{
            if(!req.body.content){
                res.json({success: false, message: 'You must provide some content'});
            }else{
                User.findById(req.decoded.userId,(err,user) =>{
                    if(err){
                        res.json({success: false, message: err});
                    }else{
                        if(user){
                            if(user.username === req.body.username){
                                let date = new Date();
                                const joke = new Joke({
                                    username: req.body.username,
                                    title: req.body.title,
                                    ref: req.body.title.replace(/[\W_]+/g,"-"),
                                    content: req.body.content,
                                    category: 'jokes',
                                    createdAt: new Date()
                                })
                                joke.save((err) =>{
                                    if(err){
                                        res.json({success:false, message: err});
                                    }else{
                                        res.json({success:true, message: 'Posted'});
                                    }
                                })
                            }else{
                                res.json({success: false, message: 'User account does not match!'});
                            }
                        }else{
                            res.json({success: false, message: 'Please Log In as a valid user!'});
                        }
                    }
                })
                
            }
        }
    }
})

module.exports = router;