const Joke = require('../models/joke');
const express = require('express');
const User = require('../models/userProfile');
const auth = require('./auth');
const router = express.Router();

let refUser;

auth(router);

function containUser(user){
    return user.username === refUser;
}

router.get('/:title/:username', (req,res) => {
    if(!req.params.title){
        res.json({success: false, message: 'Must provide title'});
    }else{
        if(!req.params.username){
            res.json({success: false, message: 'Must provide username'});
        }else{
            refUser = req.params.username;
            User.findById(req.decoded.userId,(err, user) => {
                if(err){
                    res.json({success: false, message: err });
                }else{
                    if(user){
                        if(user.username !== req.params.username){
                            res.json({success: false, message: 'Please use correct account!'});
                        }else{
                            Joke.findOne({ref: req.params.title}, (err, joke) => {
                                if(err){
                                    res.json({success: false, message: err });
                                }else{
                                    if(joke){
                                        let likedUser = joke.likes.find(containUser);
                                        let dislikedUser = joke.dislikes.find(containUser);
                                        if(likedUser){
                                            let index = joke.likes.indexOf(likedUser);
                                            joke.likes.splice(index,1);
                                        }else{
                                            if(dislikedUser){
                                                let index = joke.dislikes.indexOf(dislikedUser);
                                                joke.dislikes.splice(index,1);
                                            }
                                            joke.likes.push({
                                                userId: user._id,
                                                username: user.username
                                            });     
                                        }
                                        joke.save((err) => {
                                            if(err){
                                                res.json({success: false, message: err });
                                            }
                                            res.send(joke);
                                        })
                                    }else{
                                        res.json({success: false, message: "Joke not found!" });
                                    }
                                }
                            })
                        }
                    }else{
                        res.json({success: false, message: "User not found!" });
                    }
                }
            })
        }
    }
})

module.exports = router;