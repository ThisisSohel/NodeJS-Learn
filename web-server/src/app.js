// Run all the files together we have to use this command ------nodemon src/app.js -e js,hbs
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Sohel'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Sohel'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Sohel'
    })
})

app.get('/weather', (req, res) => {  //IF the address is missing on the search bar then  this error message will be shown.
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address.'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location}) => {
        if (error){
            return res.send({error})
        }
        forecast(latitude, longitude, (error, forecastData) => {
           if(error){
             return res.send({error})
           }

           res.send({
            forecast: forecastData,
            location,
            address: req.query.address
           })
        })

    })
    // res.send({  //to get this as output just put this "http://localhost:3000/weather?address=philadelphia" to the search bar
    //     forecast: 'It is snowing',
    //     location: 'Philadelphia',
    //     address: req.query.address
    // })
})

app.get('/products', (req, res) => {

    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})


app.get('/help/*', (req, res) => {   //Thsis function is working for wildcat method
    res.render('404', {
        title: '404',
        name: 'Sohel',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {   //This is a wildcat too it will work only when no file will be found out.
    res.render('404', {
        title: '404',
        name: 'Sohel',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})