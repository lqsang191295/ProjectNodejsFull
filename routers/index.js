const bookRouter = require('./bookRouter');
const authorRouter = require('./authorRouter');
const adminRouter = require('./admin');
const authRouter = require('./authRouter');
const express = require('express');
const router = express.Router();
const {middlewareLoggerRequest, middlewareLoggerError} = require('../middleware');
const {ejsCompiler} = require('../utils/ejsCompiler');
const ProductController = require('../controllers/productController');

router.use(middlewareLoggerRequest);

//router.use(middlewareLoggerError);

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
    res.render('product-detail', {
        breadCrumb: ['Home', 'Product', 'Name product']
    });
});


router.get('/client_products', ProductController.getProduct);

router.get('/admin', function (req, res) {
    res.render('admin/index', {
        // view: ejsCompiler('admin/body.ejs'),
        // breadCrumb: ["Home"]
    });
})

router.use(authRouter);
router.use(bookRouter);
router.use(authorRouter);
router.use(adminRouter);

module.exports = router