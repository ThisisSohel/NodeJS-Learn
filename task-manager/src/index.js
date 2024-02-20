const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

//develope the create request

app.post('/users', async(req, res) =>{
     const user = new User(req.body)


     try {
        await user.save()
        res.status(201).send(user)
     } catch (e) {
        res.status(400).send(e)
     }

    //  user.save().then(() => {
    //     res.status(201).send(user)
    //  }).catch((e)=>{
    //      res.status(400).send(e)
    //  })
})

//develope the read request

app.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
    // User.find({}).then((users)=>{
    //     res.send(users)
    // }).catch(()=>{
    //    res.status(500).send()
    // })
})

//Read user by their ID

app.get('/users/:id', async (req, res) => {
    //console.log(req.params)
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (error) {
        res.status(500).send()
    }
    // User.findById(_id).then((user)=>{
    //     if (!user) {
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch(()=>{
    //      res.status(500).send()
    // })
})


//Update data 

app.patch('/users/:id', async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true })

        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})



//develope the create request

app.post('/tasks', async (req, res) => {
   const task = new Task(req.body)

   try {
      await task.save()
      res.status(201).send(task)
    } catch (e) {
      res.status(400).send(e)
    }
})


app.listen(port, ()=> {
    console.log('Server is up on port ', port)
})