var express = require('express')

var app = express()

app.get("/api/timestamp/:date_string?", (req,res) => {
    let date
    if (req.params.date_string === undefined)
        date = new Date()
    else if(!req.params.date_string.match("-"))
        date = new Date(parseInt(req.params.date_string))
    else
        date = new Date(req.params.date_string)

    switch(typeof req.params.date_string){
        case String:
            req.params.date_string.match("-") ? console.log("String") : console.log("Int")
            break;
        case undefined:
            console.log("undefined")
            break;
        default:
            console.log("other")
    }

    if(Date.parse(date))
    {
        res.json({"unix": date.getTime(), "utc" : date.toUTCString()})
    }
    else
    {
        res.json({"error" : "Invalid Date"})
    }
})

app.listen(3000, function(err, ris){
    if(!err)
        console.log("Listening on 3000")
})

module.exports = app