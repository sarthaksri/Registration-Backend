const mongoose = require('mongoose');
const client = "mongodb+srv://sarthaksri017:xpedition@cluster0.jn0oyw5.mongodb.net/"

function connectToMongo() {
    mongoose.connect(client, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected Successfully To Database'))
        .catch(error => console.log('Failed to connect', error))
}
function disconnect() {
    client.close();
    console.log("DataBase Disconnecteed");
}
module.exports = { connectToMongo, disconnect };