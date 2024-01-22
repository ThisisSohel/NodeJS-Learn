// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    //Insert One

    // db.collection('users').insertOne({
    //     name: 'Sohel',
    //     age: 25
    // }, (error, result)=>{  //this is a call-back function. Here the result is showing the data I am inserting.
    //     if(error){
    //        return console.log('Unable to connect to database!')
    //     }
    //     console.log(result.ops);
    // })

    //InsertMany

    // db.collection('users').insertMany([
    //     {
    //         name: "Rafiq",
    //         age: 21
    //     },
    //     {
    //         name: "Rakib",
    //         age: 22
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })


    db.collection('tasks').insertMany([
        {
            description: "fish buying ",
            completed: true
        },
        {
            description: "fruits buying",
            completed: false
        }
    ], (error, result) => {
        if(error){
            return console.log('Unable to insert documents')
        }
        console.log(result.ops)
    })
})