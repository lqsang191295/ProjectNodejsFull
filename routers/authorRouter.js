const express = require('express');
const router = express.Router();

router.get('/authors', function (req, res) {
    res.send('Authors');
})

module.exports = router