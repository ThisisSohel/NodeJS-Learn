const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Defining model  

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true, // Corrected typo here
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },
    password: {
       type: String,
       required: true,
       minlength: 6,
       trim: true,
       validate(value){
        if(value.toLowerCase().includes('password')){
            throw new Error('Password cannot contain "password"')
        }
       }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {  //read more validate DOC from "Mongoosejs.com"
            if (value < 0) {
                throw new Error("Age must be a positive number");
            }
        }
    }
});

//Defining variable using constructor

const newUser = new User({
    name: '   Salek Hossain',
    //age: 24, // This will trigger the validation error
    email: "MDSRANA11@Gmail.com    ",
    password: "   123456789 "
});

// Now using "save" method to save the data to database 

newUser.save().then(() => {
    console.log(newUser);
}).catch((error) => {
    console.log('Error:', error);
});


//Just for remainder ----:: model create...> constructor create...> sava date to database



// Craeting another database named "tasks"

// const tasks = mongoose.model('tasks', {
//     description : {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// // Creating constructor to assign the values

// const myTask = new tasks({
//     description: "Wall Painting",
//     completed: false
// })

// // Now saving the values to the database

// myTask.save().then(() => {
//     console.log(myTask)
// }).catch((error) => {
//     console.log("Error", error)
// })