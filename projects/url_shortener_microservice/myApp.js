var express = require('express')
var bodyparser = require('body-parser')
require('dotenv').config()
var dns = require('dns')

var app = express()

app.use(bodyparser.urlencoded())
const arr = [
    { url: "www.google.com",
      short : "1"
    },
    { url: "www.freecodecamp.org",
      short : "545"
    }
]

const getShortURL = (array, long_url) => {
        const elem = array.find(elem => (elem.url === long_url))
        return elem ? elem.short : undefined
        
}

app.post("/api/shorturl/new", (req,res) => {
    
    dns.lookup(req.body.url, (err) => {
        (err || !getShortURL(arr, req.body.url)) ?
        res.json({"error" : "invalid URL"}) :
        res.json({
            "original_url" : req.body.url,
            "short_url" : getShortURL(arr, req.body.url)
        })
    })
})

app.get("/api/shorturl/:short", (req,res) => { 
    const elem = arr.find((elem) => (elem.short == req.params.short))
    console.log("elem", elem)
    elem ? res.redirect(`http://${elem.url}`) : res.json({"err" : "invalid short URL"})

})

app.listen(process.env.SERVER_PORT, (err) => {
    if(err)
        console.error(err)
    console.log(`Listening on ${process.env.SERVER_PORT}`)
})