require('dotenv').config();
require('./database.cjs');

const Product = require('../models/products.cjs');

(async function() {

  await Product.deleteMany({});
  const products = await Product.create([
    { name: 'Candle 59', price: 0.99 },
    { name: 'Candle 60', price: 2.99 },
    { name: 'Candle 61', price: 3.99 },
    { name: 'Candle 62', price: 0.99 },
    { name: 'Candle 63', price: 0.99 },
    { name: 'Candle 64', price: 8.99 },
    { name: 'Candle 65', price: 3.99 },
    { name: 'Candle 66', price: 7.99 },
]);

  console.log("seed data loaded - please check mongo db")
  console.log("data loaded to mongo db: " + products.length)
  process.exit();

})();