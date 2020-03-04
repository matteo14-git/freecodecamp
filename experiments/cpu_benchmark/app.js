var cb = require('cpu-benchmark')
const { fork } = require('child_process')

var os = require('os')
const cores = os.cpus().length

console.log("Core's number: ", cores)

//console.log(cb.fib(45))
console.log("START")
const begin = new Date()
const forks = new Array(4).fill().map((elem, index) => {
    console.log(`Child ${index} started`)
    return fork('child.js')
}).map((elem) => {
    return new Promise(resolve => {
        elem.on('message', resolve)
    })

})

Promise.all(forks)
    .then((datas) => {
        console.log('datas ', datas)
        const end = new Date()
        console.log(`exec time ${end.getTime() - begin.getTime()}`)
        console.log("END")
    })
    .catch(err => {
        console.log("err", err)
    })
