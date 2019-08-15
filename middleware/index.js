const { loggerRequest, loggerError } = require('../utils/logger');
const Response = require('../utils/response');
const jwt = require('jsonwebtoken');
const config = require('../config');
const SECRET = config.SECRET; 

const middlewareLoggerError = async (req, res, next) => {
    try {
        await next();
    } catch (err) {
        loggerError.error(JSON.stringify(err))
    }
}


const middlewareLoggerRequest = (req, res, next) => {
    console.log("Logger Request")
    loggerRequest.info(req.method + ' - ' + req.originalUrl);
    next();
}

const middlewareAuth = async (req, res, next) => {
    console.log("Muốn vào phải qua tao !!!!!!!!!!");
    try {
        // const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer', '') : '';
        // console.log("----------------", token)
        // if(!token) {
        //     res.redirect('/login')
        // }
        // console.log(123123123, SECRET);
        // const decode = jwt.verify(token, 'SECRET');
        // console.log("Decode", decode)
        if (2 === 2) {
            next();
        } else {
            res.redirect('/login')
        }
    } catch (err) {
        console.log("zzzzzzzzzzzzzzz", err);
        next(err);
    }
}

module.exports = {
    middlewareLoggerRequest,
    middlewareLoggerError,
    middlewareAuth
}
