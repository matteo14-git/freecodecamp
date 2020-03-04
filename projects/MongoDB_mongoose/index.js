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

/*var createAndSavePerson = function(done){
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
}*/

var createAndSavePerson = function(){
    const person = new Person({
        name: "Matteo",
        age: 22,
        favoriteFoods: ['pizza', 'pizza', 'pizza']
    })
    return new Promise((resolve, reject) => {
        person.save((err, data) => err ? reject(err) : resolve(data))
        
         
    })
}
//IT WORKS
/*createAndSavePerson()
.then((data) => {
    console.log(data)
    console.log("resolved")
})
.catch((err) => {
    console.error(err)
    console.log("rejected")
})*/

var createManyPeople = function(arrayOfPeople){
    //esegue più volte la save, una per ogni elemento dell'array
    return new Promise((resolve, reject) => {
        Person.create(arrayOfPeople, (err,data) => err ? reject(err) : resolve(data))
    })
}

const arr = [
    {
        name : "Aldo",
        age : 50,
        favoriteFoods : []
    },
    {
        name: "Giovanni",
        age: 30,
        favoriteFoods: ['papaya', 'mango']
    }
]
//IT WORKS
/*createManyPeople(arr)
.then(data => {
    console.log(data)
})
.catch(err => {
    console.error(err)
})*/

var findPeopleByName = function(peolpeNames){
    return new Promise((resolve, reject) => {
        Person.find({name: peolpeNames}, (err,data) => err ? reject(err) : resolve(data))
    })
}
let x = {};

//IT WORKS
findPeopleByName(['Matteo', 'Aldo'])
.then(data => {
    //console.log("people found")
    //console.log(data)
    x = data
    //console.log(x)
})
.catch(err => {
    console.error(err)
})



var findOneByFood = function(food){
    return new Promise((resolve, reject) => {
        Person.findOne({favoriteFoods: food}, (err, data) => err ? reject(err) : resolve(data))
    })
}
//IT WORKS
findOneByFood('pizza')
.then(data => {
    //console.log(data)
    //console.log("found")
})
.catch(err => {
    console.log(err)
})

var findPersonById = function(personId, done) {
    Person.findById({_id: personId}, function(err,data){
      done(null, data);  
    })
}

var findEditThenSave = function(personId){

    return Person.findById({_id: personId})
            .then(data =>  {
                //console.log(data)
                data.favoriteFoods.push('taco')
                return data.save()
            })
    // return new Promise((resolve, reject) => {
    //     Person.findById({_id: personId}, (err, data) => {
    //         if(err)
    //             return reject(err)
    //         console.log(data)
    //         data.favoriteFoods.push('hamburger')
    //         data.save((err, data) => err ? reject(err) : resolve(data))
    //     })
    // })
}
//IT WORKSSS
// findEditThenSave("5e54f2262109e32c7652b375")
// .then(data => {
//     //console.log("I'm out")
//     //console.log(data)
// })
// .catch(err => {
//     console.log(err)
// })

var findAndUpdate = function(personName) {
    var ageToSet = 20;
    // Person.findOneAndUpdate({"name": personName}, {"age": ageToSet},  {new: true}, function(err,data){
    //   done(null, data);
    // })

    return Person.findOneAndUpdate({"name": personName}, {"age": ageToSet},  {new: true})
            // .then((data) => {
            //     console.log("ook")
            //     return data
            // })
}

findAndUpdate("Ashley")
.then(data => {
    //console.log(data)
})
.catch(err => {
    console.log(err)
})

var removeById = function(personId) {
    // Person.findByIdAndRemove({_id: personId},function(err,data){
    //     done(null, data);
    // })
    return Person.findByIdAndRemove({_id: personId})
};

removeById("5e54f8a7e8bee4090934f804")
.then(data => {
    // console.log("Deleted")
    // console.log(data)
})
.catch(err => {
    console.error(err)
})


var removeManyPeople = function() {
    var nameToRemove = "Mary";
    // Person.remove({"name": nameToRemove}, function(err,data){
    //     done(null, data);
    // })

    return Person.remove({"name" : nameToRemove})
};

removeManyPeople()
.then(data => {
    // console.log("Removed")
    // console.log(data)
})
.catch(err => {
    console.log(err)
})

var queryChain = function() {
    var foodToSearch = "burrito";
    // Person.find({"favoriteFoods": foodToSearch})
    //   .sort({"name": 'asc'})
    //   .limit(2)
    //   .select('-age')
    //   .exec(function(err,data){
    //     done(null, data);
    //   })
      
      return Person.find({"favoriteFoods": foodToSearch})
      .sort({"name": 'asc'})
      .limit(2)
      .select('-age')
      .exec()
};

queryChain()
.then(data => {
    console.log("Chain executed")
    console.log(data)
})
.catch(err => {
    console.log(err)
})
  

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
