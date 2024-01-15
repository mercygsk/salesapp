const Favorites = require('../../models/favorites.cjs');

module.exports = {
    getFavs,
    addFav
};

// A cart is the unpaid order for a user
async function getFavs(req, res) {
  try{
    //const cart = await Favorites.find(req.user._id);
    const favs = await Favorites.find({});
    console.log(favs);
    res.status(200).json(favs);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// Add an item to the cart
async function addFav(req, res) {
  try{
    console.log("reached here");
    console.log(req.body);
    const fav = await Favorites.create({
      user: req.user._id,
      product: req.body.id,
      favtext: req.body.favtext
    });
    //await cart.addItemToCart(req.params.id);
    res.status(200).json(fav);
  }catch(e){
    console.log(e.message);
    res.status(400).json({ msg: e.message });
  }  
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty);
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  try{
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.status(200).json(cart);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

// Return the logged in user's paid order history
async function history(req, res) {
  // Sort most recent orders first
  try{
    const orders = await Order
      .find({ user: req.user._id, isPaid: true })
      .sort('-updatedAt').exec();
    res.status(200).json(orders);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }

}
