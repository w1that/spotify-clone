const mongoose = require('mongoose')

const GenreSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    playLists:{
        type:Array
    },
    coverImage:{
        type:String
    }
})

module.exports = mongoose.models.Genre || mongoose.model('Genre', GenreSchema);