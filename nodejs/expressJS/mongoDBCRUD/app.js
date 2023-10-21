// dependencies
const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require('./routeHandler/todoHandler');
// create a express app and initialize it
const app = express();

// to or validate the request only for json format text
app.use(express.json());

// database connection with mongoose
mongoose.connect('mongodb://localhost/todos')
                .then(()=>{
                    console.log('connection successful');
                })
                .catch((err) =>{
                    console.log(err);
                });
// application routes
app.use('/todo',todoHandler);

// default error handler
function errorHandler(err,req,res,next) {
    if(res.headersSent){
        return next(err);
    } 
    res.status(500).json({error: err});
}
// application server
app.listen(3000,()=>{
    console.log('listening at port 3000');
});