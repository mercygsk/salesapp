const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../../controllers/api/favorites.cjs');

// GET /api/favorites/
router.get('/', favoritesCtrl.getFavs);

// POST
router.post('/:id', favoritesCtrl.addFav);

//PUT

router.put('/:id', favoritesCtrl.updFav)
// // POST /api/favorites/cart/checkout
// router.post('/cart/checkout', favoritesCtrl.checkout);
// // POST /api/favorites/cart/qty
// router.put('/cart/qty', favoritesCtrl.setItemQtyInCart);

module.exports = router;