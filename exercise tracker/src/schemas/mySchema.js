const mongoose = require('mongoose')

var mySchema = new mongoose.Schema({
    username : String,
    exercise : [{
        description: { type: String, required: true},
        duration: {type: Number, required : true },
        date : Date
    }]
})

module.exports = mySchema