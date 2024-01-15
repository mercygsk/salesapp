const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products.cjs');

// GET /api/products/
router.get('/', productsCtrl.getProducts);


module.exports = router;