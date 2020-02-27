var mongoose = require('mongoose')
var mySchema =  require('../schemas/mySchema')

var Person = mongoose.model('Person', mySchema)

module.exports = Person