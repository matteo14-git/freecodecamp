const express = require('express')
const app = express()



app.get("/api/whoami", (req,res) => {

    const obj = {
        ipaddress : req.ip,
        language : req.get('Accept-Language'),
        software : req.get('User-agent')
    }
    res.json(obj)
})

app.listen(3000, function(err, data){
    if(err)
        console.log(err)
    console.log("Listening on 3000")
})