const { jwtDecode } = require('../../services/auth');

context = async context => {
    const { req } = context;
    const token = req.headers.token;
    if(!token) throw new Error('You are not authorized')
    const user = await jwtDecode(token);
    context.user = user;
    return context
}

module.exports = {
    context
}