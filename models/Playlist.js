const mongoose = require('mongoose')

const PlayListSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
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