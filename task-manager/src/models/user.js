const mongoose = require('mongoose');
const validator = require('validator')

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

module.exports = User


//https://www.webfx.com/web-development/glossary/http-status-codes/