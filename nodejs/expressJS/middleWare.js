const express = require('express');
/**
 * define middleware
 * use korba bole diba kono request function er age
 * 
 */
const app = express();
const appAdmin = express.Router(); // routing 
const logger = (req,res,next) =>{
    console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`);
    // next('LULULULU'); // ei next er vitore kichu dile oita error hishebe nibe
    // jodi success hoy taile shob shomoy next er vitor ta faka thakbe
    // next();
    throw new Error('This is an error');
};
const errorMiddleware = (err,req,res,next)=>{
    console.log(err);
    res.status(500).send(`Error at ${err}`);
    // this error handler handle errors and save your app from crash
};
appAdmin.use(logger);
appAdmin.use(errorMiddleware);
appAdmin.get('/dashboard',(req,res)=>{
    res.send('Dashboard');
});
// const M1 = (req,res,next) =>{
//     console.log('Logging at 1');
//     next();
// };
// const M2 = (req,res,next) => {
//     console.log('Loggin at 2');
//     next();
// };

// app.use(M1);
// app.use(M2);
// // maintains the order

// we can declare these middleWare in a wrapper function which canbe used for 
// option based middleWare calling 
// app.use(logger); //  this makes the middleware to be use in the whole application
// if we call cookie parser then it returns a middle ware
// then express.json() eitype joto gula ase shobai middleWare return kore
app.use('/admin',appAdmin);// we can make an middleware who can work only in the routing part
// error handling middleWare



app.get('/home',(req,res)=>{
     res.send('Home Page');
});
app.listen(3000,()=>{
    console.log('listening to port 3000');
});