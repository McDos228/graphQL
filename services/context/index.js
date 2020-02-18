// const { isAuth } = require('../auth');
const { jwtDecode } = require('../../services/auth');

context = async context => {

    const { req } = context;

    const token = req.headers.token;
    // console.log(context)
    context.user = token;

    return context
    // if(token) {
    //     const user = await isAuth(req);
    //     if(user) return context.user = user;
    // }
    // else throw new Error('token must be provided');
}



module.exports = {
    context,
    // isAuth
}