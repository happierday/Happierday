const express = require('express');
const mongoose = require('mongoose');
const confidDB = require('./config/db');
const path = require('path');
const bodyParser = require('body-parser');

//set up db connection
mongoose.Promise = global.Promise;
mongoose.connect(confidDB.url,(err)=>{
    if(err){
        console.log('cant connect' + err);
    }else{
        console.log('connected to happierday-test');
    }
})

const app = express();

//add midware bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//require controllers
const signup = require('./controllers/signup');

app.use(express.static(__dirname + '/client/dist/'));
app.use('/signup',signup);

//bound with angular
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
})

app.listen(8000,() => {
    console.log('listening to 8000');
});
