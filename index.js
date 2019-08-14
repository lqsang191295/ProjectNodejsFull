const express = require('express');
const app = express();
const appConfig = require('./config') || {};
const PORT = appConfig.PORT || 2345;
const routers = require('./routers');
const {loggerError} = require('./utils/logger');
const db = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(routers);

app.listen(PORT, () => {
    loggerError.info('Listen port %s', PORT)
})
