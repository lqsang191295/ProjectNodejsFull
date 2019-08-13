const bookRouter = require('./bookRouter');
const authorRouter = require('./authorRouter');
const adminRouter = require('./adminRouter');
const express = require('express');
const router = express.Router();
const {middlewareLoggerRequest} = require('../middleware');
const {ejsCompiler} = require('../utils/ejsCompiler');


router.use(middlewareLoggerRequest());

router.get('/', (req, res, next) => {
    res.render('index', {
        view: ejsCompiler('body.ejs'),
        breadCrumb: ['Home']
    });
});

router.get('/contact', (req, res, next) => {
    res.render('index', {
        view: ejsCompiler('contact.ejs'),
        breadCrumb: ['Contact']
    });
});

router.get('/about', (req, res, next) => {
    res.render('index', {
        view: ejsCompiler('about.ejs'),
        breadCrumb: ['About']
    });
});

router.get('/details/:id', (req, res, next) => {
    res.render('index', {
        view: ejsCompiler('product-detail.ejs'),
        breadCrumb: ['Home', 'Product', 'Name product']
    });
});

router.get('/login', function (req, res) {
    res.render('index', {
        view: ejsCompiler('login.ejs'),
        breadCrumb: ['Home', 'Login']
    });
})

router.use(bookRouter);
router.use(authorRouter);
router.use(adminRouter);

module.exports = router