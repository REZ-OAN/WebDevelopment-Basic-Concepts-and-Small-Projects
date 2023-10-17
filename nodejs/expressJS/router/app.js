const express = require('express');
const app = express();
const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');

// routing
app.use('/admin',adminRouter);
app.use('/',publicRouter);
// for routing we can give regex as the url
// creating server
// param middleware runs only for one request
app.listen(3000,()=>{
    console.log('Listening on port 3000');
});   