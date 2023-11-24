const path = require('path')
const express = require('express')
 console.log(__dirname)
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

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.listen(3000, () => {
    console.log('Server on port 3000.')
})


