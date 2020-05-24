const express = require('express')
require('dotenv').config()

const app = express()

app.get('/index/:user/user', (req, res) => {
    // console.log("req", req)
    console.log(req.params)
    res.json({"aaa": "CIAO" + req.path})
})



app.listen(process.env.SERVER_PORT || 3000, (err) => {
    if (err)
        console.log(err)
    console.log(`Listening on port ${process.env.SERVER_PORT}`)
}) 