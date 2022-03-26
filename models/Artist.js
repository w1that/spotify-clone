const mongoose = require('mongoose')

const ArtistSchema = new mongoose.Schema({
    popularMusics : {
        type:Array
    },
    albums:{
        type:Array
    },
    monthlyListeningCount:{
        type: Number
    },
    image:{
        type:String
    }
})

module.exports = mongoose.models.Artist || mongoose.model('Artist', ArtistSchema);