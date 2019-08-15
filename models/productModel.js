const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: { type: String, index: true, required: true },
    product_description: String,
    product_image: String,
    product_address: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);