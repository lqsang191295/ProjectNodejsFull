const express = require('express');
const router = express.Router();
const ProductController = require('../../controllers/productController');

router.get('/products', ProductController.getProduct);

router.get('/products/:id', ProductController.getProductById);

router.post('/products/add', ProductController.create);

router.post('/products/edit', ProductController.edit);

router.post('/products/delete', ProductController.delete);

module.exports = router