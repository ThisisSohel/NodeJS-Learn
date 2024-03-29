const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596'

// request({ url: url, json: true}, (error, response) => {
//     // const data = JSON.parse(response.body)
//     //  console.log(data.current);
//     if(error){
//         console.log("Unable to service");
//     }else{
//         console.log(response.body.current.weather_descriptions[0] + '- It is currently ' + response.body.current.temperature + ' degree out. It feels like ' + response.body.current.feelslike + '.');
//     }
// })


// Geocoding
// Address -> Lat/Long -> Weather

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}


geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})