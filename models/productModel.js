const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        lab: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Lab',
        },
        name: {
            type: String,
            required: true,
        },
        
        qrId: {
            type: String,
            required: true,
        },
        productImage: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        specification: [{}]

    },
    {
        timestamps: true,
    }
);


const Product = mongoose.model("Product", productSchema);

module.exports = Product;
