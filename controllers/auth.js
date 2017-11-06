const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = ((router) =>{
    router.use((req,res,next) => {
        const token = req.headers.authtoken;
        if(token){
            jwt.verify(token,'secret',(err, decoded) => {
                if(err){
                    res.json({success: false, message: err});
                }else{
                    req.decoded = decoded;
                }
            })
        }
        next();
    })
})