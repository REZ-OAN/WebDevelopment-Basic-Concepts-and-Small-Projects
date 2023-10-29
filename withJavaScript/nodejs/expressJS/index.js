const express = require('express');
const app = express();
const admin = express(); // sub app

admin.set('view engine','ejs');
// this ensures even we encounter raw text / plain text 
// and send this as a post request always converted into json
// when written structure is like json and must have content-type = application/json
// when want to transfer raw data then u have to use  express.raw()
// app.use(express.json());
// app.use(express.raw());
// for plain text

admin.route('/mello')
    .get((req,res) => {
        console.log(admin.mountpath);
        res.render('pages/about');
    })
    .post((req,res)=>{
        res.render('link');
    });
// app.use(express.text());
// app.get('/',(req,res)=>{
//    res.send('This is Home Page with GET'); 
// });
// app.post('/',(req,res)=> {
//     // what data we sent is stored on body 
//     // req.body is an object   
//     // console.log(req.body);
//     // when use raw then body will be a buffer / stream type data
//     // console.log(req.body.toString());
//     // this directly gives the string;
//     console.log(req.body);
//     // rest of them learn from the documentations
//     res.send('This is Home Page with POST')
// });
app.use('/admin',admin);// mount the path for sub-app
app.listen(3000,()=> {
    console.log('Listening On PORT 3000');
});
/**
 * app.locals -> stores the local variables and give access to all local variables
 * local variables -> the variables are used in that project
 * app.set('view engine','ejs');
 * ejs ekta engine je template render kore
 * req.baseUrl provides the routes base url if we use app as defaut route then it shows blank
 * other wise it will show the default route for the sub app that currently used
 * when have sub app its preferrable to use req.originalUrl instead of req.url
 * req.params gives us an object which stores the parameter based routing er parameters
 * req.query  gives us an object which stores the url queries
 * post er jonno body te jader paitam er jonno parser rakhte hbe
 * tarpor cookies er jonno o alada parser rakhtee hobe
 * install kore nibo npm i cookie-parser
 */