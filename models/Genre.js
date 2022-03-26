const mongoose = require('mongoose')

const GenreSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    playLists:{
        type:Array
    },
})

module.exports = mongoose.models.Genre || mongoose.model('Genre', GenreSchema);