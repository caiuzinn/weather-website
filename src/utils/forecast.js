const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=217e9720c88d36a4abfe0ef0983396d4&query=' + latitude + ',' + longitude + '&units=m';
    
    request ({ url, json: true}, (error, { body }) => {
        console.log(body.current.humidity);
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}`
        )}
    })
}

module.exports = forecast;