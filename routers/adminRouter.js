const express = require('express');
const router = express.Router();
const {middlewareAuth} = require("../middleware");
const {ejsCompiler} = require('../utils/ejsCompiler');

router.use(middlewareAuth);

router.get('/admin', function (req, res) {
    res.render('admin/index', {
        // view: ejsCompiler('admin/body.ejs'),
        // breadCrumb: ["Home"]
    });
})

router.get('/admin/product-management', function (req, res) {
    res.render('admin/product-management', {
        // view: ejsCompiler('admin/body.ejs'),
        // breadCrumb: ["Home"]
    });
})

module.exports = router