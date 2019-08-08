const express = require('express');
const app = express();
const appConfig = require('./config') || {};
const PORT = appConfig.PORT || 2345;
const routers = require('./routers');
const logger = require('./utils/logger');
console.log('routers', routers)
app.use(routers)

app.listen(PORT, () => {
    logger.info('Listen port %s', PORT)
})
