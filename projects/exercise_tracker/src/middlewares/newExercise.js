const Person = require('../models/person')

const insertExercise = (req,res) => {
    
    const d = req.body.date ? new Date(req.body.date): new Date()

    let ex = {
        description: req.body.description,
        duration: req.body.duration,
        date: d
    }

    Person.findOneAndUpdate({_id: req.body._id}, {$push: {exercise: ex}})
    .exec()
    .then(data => {res.json(data)})
    .catch(err => res.send(err))
}

module.exports = insertExercise

