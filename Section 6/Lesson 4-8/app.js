const request = require('request')

const url = 'https://jsonplaceholder.typicode.com/todos'
request({ url: url }, (error, response) => {
    // Parse the response body from JSON string into JavaScript object
    const data = JSON.parse(response.body)

    data.forEach(element =>{
        console.log(`${element.userId}. ${element.id}, ${element.title}, ${element.complete})`)
    });
})