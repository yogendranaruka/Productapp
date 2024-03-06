const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true,
        enum: ['Electronics', 'Clothing', 'Books', 'Other'],
    },
    manufacturer: {
        type: String,
    },
    inStock: {
        type: Boolean,
        default: true,
    },
    stockQuantity: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
},);

module.exports = mongoose.model('Product', productSchema);

