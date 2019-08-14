const express = require('express');
const router = express.Router();
const {ejsCompiler} = require('../utils/ejsCompiler');
const { login, register } = require('../controllers');

router.get('/login', function (req, res) {
    res.render('index', {
        view: ejsCompiler('login.ejs'),
        breadCrumb: ['Home', 'Login']
    });
})

router.get('/register', function (req, res) {
    res.render('index', {
        view: ejsCompiler('register.ejs'),
        breadCrumb: ['Home', 'Register']
    });
})

router.post('/register', register);

module.exports = router