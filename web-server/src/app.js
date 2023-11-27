const path = require('path')
const express = require('express')
 console.log(__dirname)   //to see the current path
 console.log(__filename)

const app = express()




//Creating some manual web pages


// app.get('', (req, res) => {
//      res.send('<h1> Weather</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Sohel',
//         age: 22
//     })
// })

// app.get('/about', (req, res) => {
//     res.send("About the weather status")
// })
// app.get('/weather', (req, res) => {
//      res.send('Weather page')
// })
//app.com
//app.com/help

// Creating some static web pages

const publicDirectoryPath = path.join(__dirname, '../public')   //to access all the files from public folder

app.set('view engine', 'hbs')  // using for rendering the file

app.use(express.static(publicDirectoryPath))

app.get('/index', (req, res) => {   //rendering the index file
      res.render('index', {
        title: 'Weather App',
        name: 'Sohel'
      })
})

app.get('/about', (req, res) => {   //rendering the about file
     res.render('about', {
         title: 'About myself',
         name: 'Mr. Sohel'
     })
})

app.get('/help', (req, res) => {   //rendering the help file
     res.render('help', {
        title: 'Help page',
        name: 'Mr. Sohel'
     })
})

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'It is snowing',
//         location: 'Dhaka'
//     })
// })

app.listen(3000, () => {
    console.log('Server on port 3000.')
})


