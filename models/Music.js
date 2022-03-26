const mongoose = require('mongoose')

const MusicSchema = new mongoose.Schema({
    artists:{
        type:Array,
    },
    name:{
        type:String,
    },  
    year:{
        type: Number
    },

    duration:{
        type: Number
    },

    listenCount : {
        type:Number
    },

    coverImage : {
        type: String
    },

    albumId:{
        type : String
    },

    link:{
        type:String
    }


})

module.exports = mongoose.models.Music || mongoose.model('Music', MusicSchema);