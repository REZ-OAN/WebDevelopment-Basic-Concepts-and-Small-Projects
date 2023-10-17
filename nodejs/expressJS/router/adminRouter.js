const express = require('express');

const adminRouter = express.Router();

adminRouter.get('/',(req,res)=>{
    res.send('Admin Dashboard');
});

adminRouter.get('/login',(req,res)=>{
    res.send('Admin Login');
});

module.exports = adminRouter;