// console.log('Starting');

// setTimeout(() => {
//       console.log('2 second Timer'); //it will print afetr 2 sec!
// }, 2000)

// setTimeout(() => {
//     console.log('0 second timer')
// }, 0);


// console.log('Stopping');

const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})

console.log('hola');