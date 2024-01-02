const express = require('express');
const router = express.Router();
const cartService = require('../services/cartService')

router.post('/addtocart',cartService.addtocart);
router.post('/deletecartitem',cartService.deletecartitem)
router.post('/getCartdataByuser',cartService.getCartdataByUser)

module.exports = router;