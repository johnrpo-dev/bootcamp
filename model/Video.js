
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videosSchema = new Schema({
    nombre: String,
    url: String
}, {versionKey:false})

module.exports = mongoose.model('videos', videosSchema)