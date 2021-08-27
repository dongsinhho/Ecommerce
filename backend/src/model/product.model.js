const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema(
    {
        product_id: { type: String, unique: true, trim: true, required: true },
        title: { type: String, require: true },
        category: { type: String, require: true },
        decription: { type: String, default: [] },
        price: { type: Number, require: true },
        image: { type: Array, default: [], require: true },
        stock: { type: Number, default: 0 },
        sold: { type: Number, default: 0 },
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('Product', productSchema);


