const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://varora2004:07hXcnKHfBmpgch5@cluster0.etaiii9.mongodb.net/istetest";


const connectToMongo = ()=>{
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected Successfully To Database'))
    .catch(error => console.log('Failed to connect', error))
}

module.exports = connectToMongo ;