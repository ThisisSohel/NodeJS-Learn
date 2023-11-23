const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596'

request({ url: url, json: true}, (error, response) => {
    // const data = JSON.parse(response.body)
    //  console.log(data.current);
    if(error){
        console.log("Unable to service");
    }else{
        console.log(response.body.current.weather_descriptions[0] + '- It is currently ' + response.body.current.temperature + ' degree out. It feels like ' + response.body.current.feelslike + '.');
    }
})


// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {   //error handling of API
        console.log('Unable to connect to location services!')   //Network error handing 
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')  //didn't find thge location
    } else {
        const latitude = response.body.features[0].center[0]   //Now working the API perfectly
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})