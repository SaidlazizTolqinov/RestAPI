const mongoose = require("mongoose")
const schema = mongoose.Schema

const cinema = new schema({
    title : {
        type: String,
        default: 'noname'
    },
    category: {
        type: String,
        required: true
    },
    country: {
        type: String,
        default: 'noCountry'
    },
    year : {
        type: Number
    },
    director_id:Number,
    imdb_score: Number
})

module.exports = mongoose.model("kino", cinema)