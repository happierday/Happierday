const Joke = require('../models/joke');
const Comment = require('../models/comment');
const express = require('express');
const User = require('../models/userProfile');
const auth = require('./auth');
const router = express.Router();

//get all blog

auth(router);

router.get('/:ref',(req,res) => {
    if(!req.params.ref){
        res.json({success: false, message: 'No title provided!'});
    }else{
        Joke.findOne({ref:req.params.ref}, (err, joke) => {
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

router.get('/comments/:ref',(req,res) => {
    if(!req.params.ref){
        res.json({success:false, message: 'Must provide title'});
    }else{
        Comment.findOne({ref: req.params.ref}, (err,comments) =>{
            if(err){
                res.json({success: false, message: err});
            }else{
                if(comments){
                    res.send(comments);
                }else{
                    res.json({success:false, message: "Be the first one to comment on this joke!"})
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
                Comment.findOne({ref: req.params.ref}, (err,comments) =>{
                    if(err){
                        res.json({success: false, message: err});
                    }else{
                        if(comments){
                            comments.comments.push({
                                username: req.body.username,
                                comment: req.body.comment
                            })
                            comments.save((err) => {
                                if(err){
                                    res.json({success: false, message: err});
                                }
                                res.send(comments);
                            })
                        }else{
                            const comment = new Comment({
                                ref: req.params.ref,
                                comments:[{
                                    username: req.body.username,
                                    comment: req.body.comment
                                }]
                            })
                            comment.save((err) => {
                                if(err){
                                    res.json({success: false, message: err});
                                }
                                res.send(comment);
                            })
                        }
                    }
                })
            }
        }
    }
})

module.exports = router;
