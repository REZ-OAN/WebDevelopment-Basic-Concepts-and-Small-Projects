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
// instance methods
todoSchema.methods = {
    findActive : function () {
        return mongoose.model('Todo').find({status : "active"});
    },
    // depricated
    // findActiveCallBack : function(callback) {
    //     return mongoose.model('Todo').find({status:'active'},callback);
    // }
};

// static methods
todoSchema.statics = {
    findByJS: function () {
      return this.find({ title: /learn/i });
    },
  };
  // query helpers
todoSchema.query = {
    byLanguage: function (language) {
      return this.find({ title: new RegExp(language, "i") }); // new RegExp()
    },
  };
  
module.exports = todoSchema;