const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8000;
//set up db connection
mongoose.Promise = global.Promise;
mongoose.connect(config.url,(err)=>{
    if(err){
        console.log('cant connect' + err);
    }else{
        console.log('connected to happierday');
    }
})

const app = express();

//add midware bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/client/dist/'));

//require controllers
const signup = require('./controllers/signup');
const login = require('./controllers/login');
const profile = require('./controllers/profile');
const verify = require('./controllers/verify');
const jokes = require('./controllers/joke');
const newPost = require('./controllers/newPost');
const home = require('./controllers/home');
const like = require('./controllers/like');
const dislike = require('./controllers/dislike');

app.use('/signup',signup);
app.use('/login',login);
app.use('/profile',profile);
app.use('/verify',verify);
app.use('/jokes',jokes);
app.use('/newpost',newPost);
app.use('/like',like);
app.use('/dislike',dislike);
app.use('/home',home);

//bound with angular
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
})

app.listen(port,() => {
    console.log('listening to ' + port);
});
