const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../../controllers/api/favorites.cjs');

// GET /api/favorites/
router.get('/', favoritesCtrl.getFavs);

// POST
router.post('/:id', favoritesCtrl.addFav);

//PUT
router.put('/:id', favoritesCtrl.updFav)

//DELETE
router.delete('/:id', favoritesCtrl.delFav)

module.exports = router;