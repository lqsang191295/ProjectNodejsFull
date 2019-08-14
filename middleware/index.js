const { loggerRequest, loggerError } = require('../utils/logger');

const middlewareLoggerError = async (req, res, next) => {
    try {
        console.log('Vao day roi nhe')
        await next();
        console.log('Làm xong roi nhe')
    } catch (err) {
        loggerError.error(err.message)
        console.log('Làm xong roi nhe 1111111111')
    }
}


const middlewareLoggerRequest = (req, res, next) => {
    loggerRequest.info(req.method + ' - ' + req.originalUrl);
    next();
}

const middlewareAuth = (req, res, next) => {
    console.log("Muốn vào phải qua tao !!!!!!!!!!");
    if (1 === 2) {
        next();
    } else {
        res.redirect('/login')
    }
}

module.exports = {
    middlewareLoggerRequest,
    middlewareLoggerError,
    middlewareAuth
}
