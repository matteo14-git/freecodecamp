const axios = require('axios').default
const nock = require('nock')

nock('https://jsonplaceholder.typicode.com/')
    .persist()
    .get('/todos')
    .reply(200,
        {
            authorization: 'ok'
        })

axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })