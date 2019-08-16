const express = require('express');
const router = express.Router();
const {middlewareAuth} = require("../../middleware");
const {ejsCompiler} = require('../../utils/ejsCompiler');
const productRouter = require('./productRouter');




router.use(middlewareAuth);

router.get('/admin/product-management', function (req, res) {
    res.render('admin/product-management', {
        // view: ejsCompiler('admin/body.ejs'),
        // breadCrumb: ["Home"]
    });
})

router.use(productRouter);

module.exports = router