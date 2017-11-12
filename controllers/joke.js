const Joke = require('../models/joke');
const express = require('express');
const User = require('../models/userProfile');
const auth = require('./auth');
const router = express.Router();

//get all blog

auth(router);

router.get('/:title',(req,res) => {
    if(!req.params.title){
        res.json({success: false, message: 'No title provided!'});
    }else{
        Joke.findOne({ref:req.params.title}, (err, joke) => {
            if(err){
                res.json({success: false, message: err});
            }else{
                if(joke){
                    if(req.decoded){
                        User.findById(req.decoded.userId, (err,user) =>{
                            if(err){
                                res.json({success: false, message: err});
                            }else{
                                if(user){
                                    if(joke.username === user.username){
                                        res.json({joke:joke,auth:true});
                                    }else{
                                        res.json({joke:joke,auth:false});
                                    }
                                }else{
                                    res.json({joke:joke,auth:false});
                                }
                            }
                        })
                    }else{
                        res.json({joke:joke,auth:false});
                    }
                }else{
                    res.json({success: false, message: 'Oops, Not Found!'});
                }
            }
        })
    }
})

router.post('/:ref', (req,res) =>{
    if(!req.params.ref){
        res.json({success:false, message: 'Must provide title'});
    }else{
        if(!req.body.username){
            res.json({success:false, message: 'Must provide username'});
        }else{
            if(!req.body.comment){
                res.json({success:false, message: 'Must provide comment'});
            }else{
                Joke.findOne({ref: req.params.ref}, (err,joke) =>{
                    if(err){
                        res.json({success: false, message: err});
                    }else{
                        if(joke){
                            joke.comments.push({
                                username: req.body.username,
                                comment: req.body.comment
                            })
                            joke.save((err) => {
                                if(err){
                                    res.json({success: false, message: err});
                                }
                                res.send(joke);
                            })
                        }else{
                            res.json({success: false, message: "Joke not found!"});
                        }
                    }
                })
            }
        }
    }
})

module.exports = router;
