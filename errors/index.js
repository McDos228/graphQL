const errHandler = (err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        errors: err.errors
    });
}

module.exports = {
    errHandler
}
