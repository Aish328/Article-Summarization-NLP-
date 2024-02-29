const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.Database_url)
    .then(() => {console.log("Connected to database Successfully")})
    .catch((err) => {
        console.error(err);
        console.log("Error while connecting to Database");
        process.exit(1);
    })
}

module.exports = dbConnect;