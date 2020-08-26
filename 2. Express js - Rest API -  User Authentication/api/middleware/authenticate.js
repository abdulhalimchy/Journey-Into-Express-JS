const jwt = require('jsonwebtoken');

const authenticate = (req, res, next)=>{
    try{
        let token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, "SECRETKEY");
        req.user=decode;
        next();
    }catch(error){
        res.json({
            message: "Authentication Failed, Please login"
        })
    }
}

module.exports = authenticate;