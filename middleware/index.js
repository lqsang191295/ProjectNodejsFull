const { loggerRequest, loggerError } = require('../utils/logger');
const Response = require('../utils/response');
const jwt = require('jsonwebtoken');
const config = require('../config');
const SECRET = config.SECRET;
const UserController = require('../controllers/userController');

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
        const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : '';
        if(!token) {
            res.redirect('/login')
        }
        const decode = jwt.verify(token, SECRET);
        console.log("Decode", decode)
        const {_id} = decode;
        const user = await UserController.findOneById(_id);
        if (_id && user) {
            next();
        } else {
            console.log(333333333333333)
            res.setHeader("Content-Type", "text/html")
            return res.redirect('/login')
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
