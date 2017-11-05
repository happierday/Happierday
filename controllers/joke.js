const Joke = require('../models/joke');
const express = require('express');
const User = require('../models/userProfile');
const auth = require('./auth');
const router = express.Router();

//get all blog
router.get('/',(req,res)=>{
    Joke.find({}, (err,jokes) => {
        if(err){
            res.json({success:  false, message: err });
        }else{
            if(jokes){
                res.send(jokes);
            }else{
                res.json({ success: false, message: "Opps!" });
            }
        }
    }).sort({ '_id': -1});
})

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
