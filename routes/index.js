const { Router } = require('express');
const { loginService, registerService } = require('../services/auth');

module.exports = Router()
    .post('/login', loginService)
    .post('/register', registerService)