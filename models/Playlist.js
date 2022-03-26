const mongoose = require('mongoose')

const PlayListSchema = new mongoose.Schema({
    title:{
        type:String
    },
    genreId:{
        type:String
    },
    likes:{
        type:Number
    },
    musics:{
        type:Array
    },

    coverImage:{
        type:String
    }
})

module.exports = mongoose.models.PlayList || mongoose.model('PlayList', PlayListSchema);