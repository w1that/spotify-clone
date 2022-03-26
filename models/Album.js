const mongoose = require('mongoose')

const AlbumSchema = new mongoose.Schema({
    year:{
        type:Number
    },
    musics:{
        type:Array
    },
    artistId:{
        tpye:String
    },
    coverImage:{
        type:String
    }
})

module.exports = mongoose.models.Album || mongoose.model('Album', AlbumSchema);