var express = require('express')
var router = express.Router()

router.get('/authors', function (req, res) {
    res.send('Authors');
})

module.exports = router