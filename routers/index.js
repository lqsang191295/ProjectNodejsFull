const bookRouter = require('./bookRouter');
const authorRouter = require('./authorRouter');
var express = require('express');
var router = express.Router()

router.get('/', (req, res, next) => {
    res.send('Homeeeee');
})
router.use(bookRouter);
router.use(authorRouter);

module.exports = router