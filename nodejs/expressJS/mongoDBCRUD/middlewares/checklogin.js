const jwt = require('jsonwebtoken');
// normally token passed as a header element
// or more like metadata
const checkLogin = (req,res,next) =>{
    const {authorization} = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token,'WhoIsTheboss');
        const {username, userId} = decoded;
        req.username = username;
        req.userId = userId;
        next();
    }catch{
            next("Authentication failure!!!");
    }
};

module.exports  = checkLogin;