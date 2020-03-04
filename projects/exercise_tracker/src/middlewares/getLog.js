const Person = require('../models/person')

const getLog = (req,res) => {

    // console.log(`${req.body.begin} ${req.body.end} ${req.body.duration}`)

    Person.findOne({
        _id : req.body._id,
    })
    .exec()
    .then(data => {
        let obj = {
            _id: data._id,
            username: data.username,
            exercise : data.exercise.filter(
                elem => (elem.date >= new Date(req.body.begin)
                        && elem.date <= new Date(req.body.end)
                        && elem.duration <= req.body.duration
                        )
                )
        }        
        res.json(obj.exercise.length == 0 ? {} : obj)})
    .catch(err => res.send(err))
}

module.exports = getLog