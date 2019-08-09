const winston = require('winston');

// Logger configuration
const logConfiguration = {
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logs/info.log'
        }),
        new winston.transports.File({
            level: 'error',
            filename: './logs/debug.log'
        })
    ],
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf((info) => {
            return `${info.timestamp} - [${info.level}]: ${info.message}`;
        })
    )
};

const logger = winston.createLogger(logConfiguration);

module.exports = logger;
