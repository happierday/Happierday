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

app.use(cors({
    origin: 'http://localhost:4200'
}));

//add midware bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//require controllers
const signup = require('./controllers/signup');
const login = require('./controllers/login');
const profile = require('./controllers/profile');
const verify = require('./controllers/verify');
const jokes = require('./controllers/joke');
const newPost = require('./controllers/newPost');
const home = require('./controllers/home');

app.use('/signup',signup);
app.use('/login',login);
app.use('/profile',profile);
app.use('/verify',verify);
app.use('/jokes',jokes);
app.use('/newpost',newPost);
app.use('/',home);



app.listen(port,() => {
    console.log('listening to ' + port);
});
