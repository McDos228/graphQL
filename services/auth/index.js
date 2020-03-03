const { SECRET } = require('../../config');
const jwt = require('jsonwebtoken');;
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const User = require('../../models/User');

isAuth = async (root, args, context, info) => {
    if(!context.user) throw new Error('You are not authorized')
}

jwtDecode = async token => {
    return jwt.verify(token, SECRET, async (err, decode) => {
        if(err) throw new Error(err);
        const user = await User.findOne({username: decode.username});
        if(user) 
            return {
               user: user.username
            }
        else
            throw new Error('Invalid username');
    })
};

const loginService = async (req, res, next)=>{
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});
        if(!user) throw {message : 'no user found'}
        if(bcrypt.compareSync(password, user.password)){
            let token = jwt.sign({
                userId: user.id,
                username: user.username
            }, SECRET, { expiresIn: '1w' })
            res.json(token)
        }      
    } catch (error) {
        next(error)
    }
}

const registerService = async (req, res, next)=>{
    try {
        const {email, password, username} = req.body;

        let pass = bcrypt.hashSync(password, salt);
        const user = await User.create({
            username,
            password: pass,
            email,
        });
        res.json(user.username)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    isAuth,
    jwtDecode,
    loginService,
    registerService,
}