const mongoose = require('mongoose');
const validator = require('validator');

// create a schema with validation
// schema gives us the tool for build a model
const userSchema = mongoose.Schema({
   name:{
        type : String,
        required : true,
    },
    username: {
     type : String,
     required : true,
    },
    email : {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required : true,
        validator : validator.isEmail,
    },
    password : {
        type : String,
        required : true,
        validator : validator.isStrongPassword,

    },
    status :{
        type : String,
        enum : ['active','inactive']
    },
});

module.exports = userSchema;