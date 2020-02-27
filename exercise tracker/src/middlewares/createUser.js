const Person = require('../models/person')

const createUser = (req,res,next) => {
    console.log(Person)
    Person.create({username: req.body.username})
    .then(data => {
        req.body._id = data._id
        next()}
        )
    .catch(err => {res.status(500).send(err)
    })
}

module.exports = createUser