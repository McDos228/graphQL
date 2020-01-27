const { SECRET } = require('../../config');
const jwt = require('jsonwebtoken');
const {} = require('../../models/');
// const User = require('../../models/User');

isAuth = req => {

    const token = req.headers.token;
    jwt.verify(token, SECRET, async (err, decode) => {
        if(err) throw err;

        const user = await User.findOne({username: decode.username});
        if(user) 
            return {
                username
            }
        else
            throw new Error('You are not authorized');
            // console.log('you are not authorized')

    })

    // if (!req.headers.token) return res.status(401).json("You are not authorized!");
    // jwt.verify(req.headers.token, secret, async (err, decode) => {
    
    //     const user = await getOne({modelName : 'User', where:{id : decode.userId}})
    //     if(user){
    //         req.user = decode;
    //         return next();
    //     }else
    //         return res.status(401).json("Invalid token!");
    // })
};

module.exports = {
    isAuth
}