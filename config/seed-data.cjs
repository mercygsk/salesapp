require('dotenv').config();
require('./database.cjs');

const ProductType = require('../models/producttype.cjs');
const Product = require('../models/product.cjs');

(async function() {

  await ProductType.deleteMany({});
  const producttypes = await ProductType.create([
    {name: 'CandleType1', sortOrder: 10},
    {name: 'CandleType2', sortOrder: 20},
    {name: 'CandleType3', sortOrder: 30},
    {name: 'CandleType4', sortOrder: 40},
    {name: 'CandleType5', sortOrder: 50},
    {name: 'CandleType6', sortOrder: 60},
    {name: 'CandleType7', sortOrder: 70},
    {name: 'CandleType8', sortOrder: 80},
    {name: 'CandleType9', sortOrder: 90},
    {name: 'CandleType10', sortOrder: 100},
  ]);

  await Product.deleteMany({});
  const products = await Product.create([
    { name: 'Candle 1', img: '0001.jpg', producttype: producttypes[0], price: 5.99 },
    { name: 'Candle 2', img: '0002.jpg', producttype: producttypes[0], price: 6.99 },
    { name: 'Candle 3', img: '0003.jpg', producttype: producttypes[0], price: 3.99 },
    { name: 'Candle 4', img: '0004.jpg', producttype: producttypes[1], price: 14.99 },
    { name: 'Candle 5', img: '0005.jpg', producttype: producttypes[1], price: 13.99 },
    { name: 'Candle 6', img: '0006jpg', producttype: producttypes[1], price: 25.99 },
    { name: 'Candle 7', img: '0007.jpg', producttype: producttypes[2], price: 1.99 },
    { name: 'Candle 8', img: '0008.jpg', producttype: producttypes[2], price: 4.99 },
    { name: 'Candle 9', img: '0009.jpg', producttype: producttypes[3], price: 3.99 },
    { name: 'Candle 10', img: '0010.jpg', producttype: producttypes[3], price: 7.99 },
    { name: 'Candle 11', img: '0011.jpg', producttype: producttypes[3], price: 1.99 },
    { name: 'Candle 12', img: '0012.jpg', producttype: producttypes[4], price: 2.99 },
    { name: 'Candle 13', img: '0013.jpg', producttype: producttypes[4], price: 3.99 },
    { name: 'Candle 14', img: '0014.jpg', producttype: producttypes[5], price: 1.99 },
    { name: 'Candle 15', img: '0015.jpg', producttype: producttypes[5], price: 0.99 },
    { name: 'Candle 16', img: '0016.jpg', producttype: producttypes[5], price: 2.99 },
    { name: 'Candle 17', img: '0017.jpg', producttype: producttypes[5], price: 3.99 },
    { name: 'Candle 18', img: '0018.jpg', producttype: producttypes[6], price: 0.99 },
    { name: 'Candle 19', img: '0019.jpg', producttype: producttypes[6], price: 0.99 },
    { name: 'Candle 20', img: '0020.jpg', producttype: producttypes[6], price: 8.99 },
    { name: 'Candle 21', img: '0021.jpg', producttype: producttypes[6], price: 3.99 },
    { name: 'Candle 22', img: '0022.jpg', producttype: producttypes[6], price: 7.99 },
    { name: 'Candle 23', img: '0023.jpg', producttype: producttypes[0], price: 5.99 },
    { name: 'Candle 24', img: '0024.jpg', producttype: producttypes[0], price: 6.99 },
    { name: 'Candle 25', img: '0025.jpg', producttype: producttypes[0], price: 3.99 },
    { name: 'Candle 26', img: '0026.jpg', producttype: producttypes[1], price: 14.99 },
    { name: 'Candle 27', img: '0027.jpg', producttype: producttypes[1], price: 13.99 },
    { name: 'Candle 28', img: '0028.jpg', producttype: producttypes[1], price: 25.99 },
    { name: 'Candle 29', img: '0029.jpg', producttype: producttypes[2], price: 1.99 },
    { name: 'Candle 30', img: '0030.jpg', producttype: producttypes[2], price: 4.99 },
    { name: 'Candle 31', img: '0031.jpg', producttype: producttypes[3], price: 3.99 },
    { name: 'Candle 32', img: '0032.jpg', producttype: producttypes[3], price: 7.99 },
    { name: 'Candle 33', img: '0033.jpg', producttype: producttypes[3], price: 1.99 },
    { name: 'Candle 34', img: '0034.jpg', producttype: producttypes[4], price: 2.99 },
    { name: 'Candle 35', img: '0035.jpg', producttype: producttypes[4], price: 3.99 },
    { name: 'Candle 36', img: '0036.jpg', producttype: producttypes[5], price: 1.99 },
    { name: 'Candle 37', img: '0037.jpg', producttype: producttypes[5], price: 0.99 },
    { name: 'Candle 38', img: '0038.jpg', producttype: producttypes[5], price: 2.99 },
    { name: 'Candle 39', img: '0039.jpg', producttype: producttypes[5], price: 3.99 },
    { name: 'Candle 40', img: '0040.jpg', producttype: producttypes[6], price: 0.99 },
    { name: 'Candle 41', img: '0041.jpg', producttype: producttypes[6], price: 0.99 },
    { name: 'Candle 42', img: '0042.jpg', producttype: producttypes[6], price: 8.99 },
    { name: 'Candle 43', img: '0043.jpg', producttype: producttypes[6], price: 3.99 },
    { name: 'Candle 44', img: '0044.jpg', producttype: producttypes[6], price: 7.99 },
    { name: 'Candle 45', img: '0045.jpg', producttype: producttypes[0], price: 5.99 },
    { name: 'Candle 46', img: '0046.jpg', producttype: producttypes[0], price: 6.99 },
    { name: 'Candle 47', img: '0047.jpg', producttype: producttypes[0], price: 3.99 },
    { name: 'Candle 48', img: '0048.jpg', producttype: producttypes[1], price: 14.99 },
    { name: 'Candle 49', img: '0049.jpg', producttype: producttypes[1], price: 13.99 },
    { name: 'Candle 50', img: '0050.jpg', producttype: producttypes[1], price: 25.99 },
    { name: 'Candle 51', img: '0051.jpg', producttype: producttypes[2], price: 1.99 },
    { name: 'Candle 52', img: '0052.jpg', producttype: producttypes[2], price: 4.99 },
    { name: 'Candle 53', img: '0053.jpg', producttype: producttypes[3], price: 3.99 },
    { name: 'Candle 54', img: '0054.jpg', producttype: producttypes[3], price: 7.99 },
    { name: 'Candle 55', img: '0055.jpg', producttype: producttypes[3], price: 1.99 },
    { name: 'Candle 56', img: '0056.jpg', producttype: producttypes[4], price: 2.99 },
    { name: 'Candle 57', img: '0057.jpg', producttype: producttypes[4], price: 3.99 },
    { name: 'Candle 58', img: '0058.jpg', producttype: producttypes[5], price: 1.99 },
    { name: 'Candle 59', img: '0059.jpg', producttype: producttypes[5], price: 0.99 },
    { name: 'Candle 60', img: '0060.jpg', producttype: producttypes[5], price: 2.99 },
    { name: 'Candle 61', img: '0061.jpg', producttype: producttypes[5], price: 3.99 },
    { name: 'Candle 62', img: '0062.jpg', producttype: producttypes[6], price: 0.99 },
    { name: 'Candle 63', img: '0063.jpg', producttype: producttypes[6], price: 0.99 },
    { name: 'Candle 64', img: '0064.jpg', producttype: producttypes[6], price: 8.99 },
    { name: 'Candle 65', img: '0065.jpg', producttype: producttypes[6], price: 3.99 },
    { name: 'Candle 66', img: '0066.jpg', producttype: producttypes[6], price: 7.99 },
]);

  console.log("seed data loaded - please check mongo db")

  process.exit();

})();