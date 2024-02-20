// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const objectID = mongodb.objectID

const { MongoClient, ObjectID } = require('mongodb'); //this is the shoort hand process to define mongoClient and objectId

// const id = new ObjectID(); // Corrected the instantiation of ObjectID
// console.log(id.id.length); 
// console.log(id.getTimestamp());


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    //Insert One

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Touhidujjaman Sohel',
    //     age: 24
    // }, (error, result)=>{  //this is a call-back function. Here the result is showing the data I am inserting.
    //     if(error){
    //        return console.log('Unable to connect to database!')
    //     }
    //     console.log(result.ops);
    // })

    //InsertMany

    // db.collection('tasks').insertMany([
    //     {
    //         description: "shoes buying ",
    //         completed: true
    //     },
    //     {
    //         description: "Breakfast items buying",
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })

    //Read one 

    // db.collection('users').findOne({_id: new ObjectID("65b1ff62531d630b3432dd03")}, (error, users) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(users);
    // })

    // //Read many

    // db.collection('users').find({age: 25}).toArray ((error, users) => {

    //    console.log(users)
    // })

    
    // // to count the users number after fatching from database

    // db.collection('users').find({age: 25}).count((error, count) => {

    //     console.log(count)
    //  })



    // Update one

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("65ae126cdebd452420001945")
    // }, {
    //     $set: {
    //         name: "Touhidujjaman Sohel"
    //     }
    // })
    // updatePromise.then((result)=>{
    //     console.log(result);

    // }).catch((error) => {
    //     console.log(error)
    // })


    //Update many


    // db.collection('tasks').updateMany({
    //     description: "fish buying "
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }).then((result)=>{
    //    console.log(result.modifiedCount)
    // }).catch((error)=>{
    //    console.log(error)
    // })


    //Delete one

    db.collection('users').deleteMany({
        age: 27
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

    //Delete one

    db.collection('tasks').deleteOne({
        description: "fruits buying"
    }).then((result)=>{
       console.log(result)
    }).catch((error)=>{
       console.log(error)
    })

})