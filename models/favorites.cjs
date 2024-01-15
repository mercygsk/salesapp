const mongoose = require('mongoose');

const favoriteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    favtext: {
        type: String,
        required: [true, 'Please add favorite text']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Favorite', favoriteSchema);