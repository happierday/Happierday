const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//set up db connection
mongoose.Promise = global.Promise;
mongoose.connect(config.url,(err)=>{
    if(err){
        console.log('cant connect' + err);
    }else{
        console.log('connected to happierday-test');
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

app.use(express.static(__dirname + '/client/dist/'));
app.use('/signup',signup);
app.use('/login',login);
app.use('/profile',profile);
app.use('/verify',verify);


//bound with angular
// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname + '/client/dist/index.html'));
// })

app.listen(8000,() => {
    console.log('listening to 8000');
});
