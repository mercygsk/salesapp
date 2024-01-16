const Favorites = require('../../models/favorites.cjs');

module.exports = {
    getFavs,
    addFav,
    updFav,
    delFav
};


async function getFavs(req, res) {
  try{
    const favs = await Favorites.find({
      user: req.user._id
    }).populate('product').exec();
    res.status(200).json(favs);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function addFav(req, res) {
  try{
    const fav = await Favorites.create({
      user: req.user._id,
      product: req.body.id,
      favtext: req.body.favtext
    });
    res.status(200).json(fav);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

async function updFav(req, res) {
  try{
    const fav = await Favorites.findOneAndUpdate(
      { _id: req.body.id },
      { favtext: req.body.favtext },
      { new: true } 
    )
    res.status(200).json(fav);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function delFav(req, res) {
  try{
    const fav = await Favorites.findByIdAndDelete(
      { _id: req.body.id }
    )
    res.status(200).json(fav);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}