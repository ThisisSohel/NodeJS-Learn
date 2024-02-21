const express = require('express')
const User = require('../models/user')
const router = new express.Router()

//develope the create request of Users

router.post('/users', async(req, res) =>{
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

//develope the read request for Users

router.get('/users', async (req, res) => {

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

router.get('/users/:id', async (req, res) => {
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


//Update data for Users

router.patch('/users/:id', async(req, res) => {
   const updates = Object.keys(req.body)
   const allowedUpdates = ['name', 'email', 'password', 'age']

   const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

   if(!isValidOperation) {
       return res.status(400).send('Error! Invalid updates')
   }
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


//Delete Data request for Users

router.delete('/users/:id', async(req, res) => {
   try {
       const user = await User.findByIdAndDelete(req.params.id)
       if(!user){
           return res.status(404).send()
       }
       res.send(user)
   } catch (error) {
       res.status(500).send(error)
   }
})


module.exports = router