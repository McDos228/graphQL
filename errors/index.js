const errHandler = (err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        errors: err.errors
    });
}

formatError = err => {
    return {
        msg: err.message,
        code: err.extensions.code
    }
}

module.exports = {
    errHandler,
    formatError
}
