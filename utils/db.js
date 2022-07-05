const mongoose = require('mongoose');

const uri = process.env.MONGO_URI
const atlasUri = process.env.ATLAS_MONGO_URI

const connectMongo = async ()=> mongoose.connect(atlasUri)

module.exports = connectMongo ;