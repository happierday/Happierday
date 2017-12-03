const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const controllers = require('./controllers');
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
const router = express.Router();
// app.use(cors({
//     origin: 'http://localhost:4200'
// }));

//add midware bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/client/dist/'));

//require controllers
controllers(router);

//bound with angular
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
})

app.listen(port,() => {
    console.log('listening to ' + port);
});
