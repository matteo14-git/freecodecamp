const sendUser = (req,res) => {
    res.json({id: req.body._id, username: req.body.username})
} 

module.exports = sendUser