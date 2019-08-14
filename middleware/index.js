const { loggerRequest } = require('../utils/logger');
const middlewareLoggerRequest = () => (req, res, next) => {
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
    middlewareAuth
}
