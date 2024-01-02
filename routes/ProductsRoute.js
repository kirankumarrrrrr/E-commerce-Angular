const express = require('express');
const router = express.Router();
const productService = require('../services/productService')

router.get("/getProducts",productService.getProducts);

module.exports = router;
