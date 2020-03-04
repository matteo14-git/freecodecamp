const Person = require('../models/person')

const userList = (req,res) => { 
    Person.find().select('_id username').exec()
    .then(data => res.json(data))
    .catch(err => res.send(err))
}

module.exports = userList