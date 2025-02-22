const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: [true,"Please enter product name"]
        },

        quantity:{
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },
    },
    {
        timestamps: true
    }
);
const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;