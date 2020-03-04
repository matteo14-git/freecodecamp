var cb = require('cpu-benchmark')

process.send(cb.fib(41))

