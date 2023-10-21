const mongoose = require('mongoose');


// create a schema with validation
// schema gives us the tool for build a model
const todoSchema = mongoose.Schema({
    title:{
        type : String,
        required : true,
    },
    description : String,
    status :{
        type : String,
        enum : ['active','inactive']
    },
    date : {
        type: Date,
        default : Date.now
    }
});

module.exports = todoSchema;