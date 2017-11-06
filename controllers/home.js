const express = require('express');
const Joke = require('../models/joke');
const router = express.Router();

router.get('/',(req,res) => {
    Joke.find({},(err,jokes) => {
        if(err){
            res.json({success: false, message: err})
        }else{
            if(jokes){
                res.send(jokes);
            }else{
                res.json({success: false, message: 'No jokes found!'});
            }
        }
    })
})

module.exports = router;