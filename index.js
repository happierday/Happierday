const express = require('express');
const mongoose = require('mongoose');
const confidDB = require('./config/db');
const path = require('path');
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

//bound with angular
app.use(express.static(__dirname + '/client/dist/'));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
})

app.listen(8000,() => {
    console.log('listening to 8000');
});
