const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: { 
        type: Number, 
        required: [true, 'Please add price'], default: 0 },
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema);