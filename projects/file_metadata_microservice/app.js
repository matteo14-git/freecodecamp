var express = require('express')
var bodyparser = require('body-parser')

require('dotenv').config()
var fileupload = require('express-fileupload')

var app = express()

app.use(fileupload())
app.use(bodyparser.urlencoded())
app.use(bodyparser.json())

app.post('/upload', (req,res) => {
    console.log(req.files.upfile)
    res.json({
        "name": req.files.upfile.name,
        "type": req.files.upfile.mimetype,
        "size": req.files.upfile.size
    })
})

app.listen(process.env.PORT || 3000 , (err) => {
    if(err)
        console.log(err)
    console.log("Listening on ", process.env.PORT)
})