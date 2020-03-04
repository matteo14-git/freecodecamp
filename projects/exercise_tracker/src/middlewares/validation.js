const validateUser = (req,res,next) => {
    req.body.username ? next() : res.status(400).send("err")
}

const validateExercise = (req,res,next) => {
    req.body.description && req.body.duration ? next() : res.status(400).send("err")
}

module.exports = {
    validateUser : validateUser,
    validateExercise : validateExercise
}

