const path = require('path')
const express = require('express')
const hbs = require('hbs')

 console.log(__dirname)   //to see the current path
 console.log(__filename)

const app = express()

// Define path for Express Engine
const publicDirectoryPath = path.join(__dirname, '../public')   
const viewsPath = path.join(__dirname, '../templates/views') //customized templates
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handelbars engine and views location
app.set('view engine', 'hbs')  // using for rendering the file
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/index', (req, res) => {   //rendering the index file
      res.render('index', {
        title: 'Weather App',
        name: 'Sohel'
      })
})

app.get('/about', (req, res) => {   //rendering the about file
     res.render('about', {
         title: 'About myself....',
         name: 'Mr. Sohel'
     })
})

app.get('/help', (req, res) => {   //rendering the help file
     res.render('help', {
        title: 'Help page',
        name: 'Mr. Sohel'
     })
})

app.listen(3000, () => {
    console.log('Server on port 3000.')
})


