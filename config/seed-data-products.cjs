require('dotenv').config();
require('./database.cjs');

const Product = require('../models/products.cjs');

(async function() {

  await Product.deleteMany({});
  const products = await Product.create(
[
  {
    "name": "Smartphone X",
    "description": "High-performance smartphone with advanced features.",
    "image": "mobile-phone-2198770_1280.png",
    "price": 799.99
  },
  {
    "name": "Wireless Headphones Pro",
    "description": "Noise-canceling wireless headphones for immersive audio experience.",
    "image": "headphones-3683983_1280.jpg",
    "price": 149.99
  },
  {
    "name": "Gaming Laptop Elite",
    "description": "Powerful gaming laptop with cutting-edge graphics and processing speed.",
    "image": "laptop-1483974_1280.jpg",
    "price": 1999.99
  },
  {
    "name": "Fitness Tracker Plus",
    "description": "Track your fitness goals with this advanced fitness tracker.",
    "image": "heart-rate-monitoring-device-1903997_1280.jpg",
    "price": 79.99
  },
  {
    "name": "Coffee Maker Deluxe",
    "description": "Premium coffee maker for brewing the perfect cup of coffee.",
    "image": "coffee_maker_deluxe.png",
    "price": 129.99
  },
  {
    "name": "Outdoor Adventure Backpack",
    "description": "Durable and spacious backpack for your outdoor adventures.",
    "image": "backpack-2459934_640.png",
    "price": 89.99
  },
  {
    "name": "Smart Home Security System",
    "description": "Secure your home with this intelligent home security system.",
    "image": "smart-home-2769210_1280.jpg",
    "price": 299.99
  },
  {
    "name": "Professional Camera Kit",
    "description": "Capture stunning moments with this professional camera kit.",
    "image": "camera-1721375_1280.jpg",
    "price": 1499.99
  },
  {
    "name": "Fashionable Smart Watch",
    "description": "Stay connected and stylish with this fashionable smartwatch.",
    "image": "polar-a360-2059937_1280.jpg",
    "price": 129.99
  },
  {
    "name": "Portable Bluetooth Speaker",
    "description": "Enjoy music on the go with this compact Bluetooth speaker.",
    "image": "speakers-4109274_1280.jpg",
    "price": 59.99
  }
]

);

  console.log("seed data loaded - please check mongo db")
  console.log("data loaded to mongo db: " + products.length)
  process.exit();

})();