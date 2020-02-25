var mongoose = require('mongoose')
require('dotenv').config()


console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true }).then(() =>  {
    console.log("Connected")
}).catch(err => {
    console.log("err", err)
})

const mySchema = mongoose.Schema({
    name: {type: String, required: true},
    age: Number,
    favoriteFoods: [String]
})

const Person = mongoose.model('Person', mySchema)

var createAndSavePerson = function(done){
    const person = new Person({
        name: "Matteo",
        age: 22,
        favoriteFoods: ['pizza', 'pizza', 'pizza']
    })
    //salva una sola entry nel DB
    person.save(function(err,data){
        if(err)
            console.error(err)
        done(err, data)
        console.log("person saved")
    })
}

var saveMorePeople = function(arrayOfPeople, done){
    //esegue più volte la save, una per ogni elemento dell'array
    Person.create(arrayOfPeople, function(err,data){
        if(err)
            console.error(err)
        done(err,data)
    })
}

var findPeople = function(peolpeNames, done){
    Person.find({name: peolpeNames}, function(err,data){
        if(err)
            console.log(err)
        done(err,data)
    })
}