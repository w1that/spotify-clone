const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username :{
        type:String,
        trim:true,
        maxlength:10
    },

    password:{
        type:String,
        maxlength:14,
        minlength:6
    },

    name : {
        type:String,
    },

    likedMusics : {
        type : Array
    }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);