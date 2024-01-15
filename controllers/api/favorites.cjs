const Favorites = require('../../models/favorites.cjs');

module.exports = {
    getFavs,
    addFav,
    updFav
};


async function getFavs(req, res) {
  try{
    // console.log(req.body);
    const favs = await Favorites.find({
      user: req.user._id
    }).populate('product').exec();
    // console.log(favs.length);
    // console.log(favs[0]);
    res.status(200).json(favs);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function addFav(req, res) {
  try{
    // console.log("reached here");
    // console.log(req.body);
    const fav = await Favorites.create({
      user: req.user._id,
      product: req.body.id,
      favtext: req.body.favtext
    });
    res.status(200).json(fav);
  }catch(e){
    console.log(e.message);
    res.status(400).json({ msg: e.message });
  }  
}

async function updFav(req, res) {
  try{
    console.log(req.body);
    const fav = await Favorites.findOneAndUpdate(
      { _id: req.body.id },
      { favtext: req.body.favtext },
      { new: true } // Return the modified document
    )
    console.log(fav);
    res.status(200).json(fav);
  }catch(e){
    console.log(e.message);
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
