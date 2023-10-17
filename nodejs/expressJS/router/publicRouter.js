const express = require('express');
const publicRouter = express.Router();
publicRouter.get('/',(req,res) => {
    res.send('User Dashboard'); 
});
publicRouter.get('/about',(req,res) =>{
    res.send('User About');
});
// create the universal router with multiple method handling
publicRouter.route('/user')
            .all((req,res,next)=>{
                console.log('I\'m using All');
                next();
            })
            .get((req,res) =>{
                res.send('GET METHOD');
            })
            .put((req,res) =>{
                res.send('PUT METHOD');
            })
            .post((req,res) =>{
                res.send('POST METHOD');
            })
            .delete((req,res) =>{
                res.send('DELETE METHOD');
            })
module.exports = publicRouter;