require('dotenv').config()
var bodyParser = require('body-parser')
var express = require('express')
var app = express()

app.use(function(req,res,next) {
    console.log(`${req.hostname} ${req.path} - ${req.ip}`)
    next()
})

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(__dirname + "/public"))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/files/index.html")
})

const jsonObj = {
    "name": "Matteo",
    "date": {
        "day": 24,
        "month": "feb",
        "year": 2020
    }    
}
app.get("/json", function (req,res) {
    if(process.env.MESSAGE_STYLE === "uppercase")
        jsonObj.date.month = jsonObj.date.month.toUpperCase()

    res.json(jsonObj)
})

app.get("/now", function(req,res,next) {
    req.time = new Date().toString()
    next()
},
function(req,res) {
    res.send({"time": req.time})
})

app.get("/:word/echo", function(req,res) {
    res.send({"echo": req.params.word})
})

app.route("/name").get(function(req,res) {
    res.send({name: `${req.query.first} ${req.query.last}`})
})
.post(function(req, res) {
    console.log(req.body)
    res.send({name:`${req.body.first} ${req.body.last}`})
})

app.listen(3000, function(err, ris){
    if(!err)
    console.log("Server listening on 3000")
})


module.exports = app;