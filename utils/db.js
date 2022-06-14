const mongoose = require('mongoose');

const uri = process.env.MONGO_URI

const connectMongo = async ()=> mongoose.connect(uri)

module.exports = connectMongo ;