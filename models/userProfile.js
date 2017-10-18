const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    email:  { type : String, required:true,  unique:true, lowercase:true},
    username:  { type : String, required:true,  unique:true, lowercase:true},
    password:  { type : String, required:true},
});

userProfileSchema.pre('save',function(next){
    if(!this.isModified('password')) return next();
    bcrypt.hash(this.password,10,(err,hash)=>{
        if(err) return next(err);
        this.password = hash;
        next();
    })
})

//export model
module.exports = mongoose.model('Animal', userProfileSchema);
