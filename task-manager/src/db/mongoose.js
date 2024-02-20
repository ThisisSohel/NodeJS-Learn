const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// //Defining variable using constructor

// const newUser = new User({
//     name: '   Salek Hossain',
//     //age: 24, // This will trigger the validation error
//     email: "MDSRANA11@Gmail.com    ",
//     password: "   12345435435 "
// });

// // Now using "save" method to save the data to database 

// newUser.save().then(() => {
//     console.log(newUser);
// }).catch((error) => {
//     console.log('Error:', error.massage);
// });

//Read user info


// Find the user by email
// User.findOne({ age: 24 })
//     .then(user => {
//         if (user) {
//             console.log("User found:", user);
//         } else {
//             console.log("User not found");
//         }
//     })
//     .catch(error => {
//         console.log("Error:", error.message);
//     });

// Delete user 

// Find the user by email and delete
// User.findOneAndDelete({ email: "MDSRANA11@Gmail.com" })
//     .then(deletedUser => {
//         if (deletedUser) {
//             console.log("User deleted:", deletedUser);
//         } else {
//             console.log("User not found");
//         }
//     })
//     .catch(error => {
//         console.log("Error:", error.message);
//     });


//Update user info


// Find the user by email and update their age
// User.findOneAndUpdate(
//      { 
//         email: "MDSRANA11@Gmail.com" 
//      },
//      { 
//         $set: { age: 18 } 
//      },
//      { 
//         new: true 
//      } // To return the updated document
// )
//     .then(updatedUser => {
//         if (updatedUser) {
//             console.log("User updated:", updatedUser);
//         } else {
//             console.log("User not found");
//         }
//     })
//     .catch(error => {
//         console.log("Error:", error.message);
//     });