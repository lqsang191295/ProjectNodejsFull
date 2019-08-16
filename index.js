const express = require('express');
const app = express();
const appConfig = require('./config') || {};
const PORT = appConfig.PORT || 2345;
const routers = require('./routers');
const {logger} = require('./utils/logger');
const db = require('./db');

console.log("dbb", db)
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(routers);

app.use(function (err, req, res, next) {
    res.status(500).send(err)
  })

app.listen(PORT, () => {
    logger.info('Listen port %s', PORT)
})
