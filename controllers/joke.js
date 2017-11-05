const Joke = require('../models/joke');
const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/userProfile');
const router = express.Router();
//authenticate user

router.get('/',(req,res)=>{
    let jokes = []
    Joke.find({}, (err,snap) => {
        if(err){
            res.json({success:  false, message: err });
        }else{
            if(snap){
                snap.forEach((joke) => {
                    let ref = {
                        title: joke.title,
                        username: joke.username,
                        ref: joke.ref
                    }
                    jokes.push(ref);
                })
                res.send(jokes);
            }else{
                res.json({ success: false, message: "Opps!" });
            }
        }
    })
})

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
            }
        }
    }
})

module.exports = router;
