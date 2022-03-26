const mongoose = require('mongoose')

const AlbumSchema = new mongoose.Schema({
    year:{
        type:Number
    },
    name:{
        type:String
    },
    musics:{
        type:Array
    },
    artistId:{
        type:String
    },
    coverImage:{
        type:String
    }
})

module.exports = mongoose.models.Album || mongoose.model('Album', AlbumSchema);