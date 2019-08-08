const winston = require('winston');
const loggerInfo = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: false,
            json: false,
            colorize: false,
            timestamp: function() {
                const date = new Date();

                let hour = date.getUTCHours();
                hour = (hour < 10 ? '0' : '') + hour;

                let min  = date.getUTCMinutes();
                min = (min < 10 ? '0' : '') + min;

                let sec  = date.getUTCSeconds();
                sec = (sec < 10 ? '0' : '') + sec;

                const year = date.getUTCFullYear();

                let month = date.getUTCMonth() + 1;
                month = (month < 10 ? '0' : '') + month;

                let day  = date.getUTCDate();
                day = (day < 10 ? '0' : '') + day;

                const millisecond = date.getUTCMilliseconds();

                return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec + '.' + millisecond;

            },
            formatter: function(options) {
                // Return string will be passed to logger.
                return options.timestamp() + ' ' + options.level.toUpperCase() +' '+ (undefined !== options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
            }
        }),
    ],
    exitOnError: false
});

module.exports = {
    info: loggerInfo,
    debug: loggerDebug
};