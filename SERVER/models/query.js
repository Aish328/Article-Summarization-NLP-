const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
    input:{
        type:String,
        required:true
    },
    summary:{
        type:String,
    },

    sources:[{
        type:String,
    }],

    keywords:[{
        type:String
    }],
    imageLinks:[{
        type:String
    }]
})

module.exports = mongoose.model("Query" , querySchema);