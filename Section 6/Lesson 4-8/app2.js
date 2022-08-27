const request = require('request')
const url =
'https://jsonplaceholder.typicode.com/todos'
request({ url: url, json: true }, (error, response) => {
    console.log('ID: ' + response.body[0].id  +
    ' Title: ' + response.body[0].title +
    ' Completed: ' + response.body[0].completed)
})