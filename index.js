const express = require('express');
const app = express();
const appConfig = require('./config') || {};
const PORT = appConfig.PORT || 2345;
const routers = require('./routers');
const logger = require('./utils/logger');

app.use(routers)

app.listen(PORT, () => {
    console.log(PORT)
    logger.info('Listen port %s', PORT)
})
