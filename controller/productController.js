const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");


// @desc    Register product
// @route   POST /product
// @access  Public

const addProduct = asyncHandler(async (req, res) => {

    let productImage = (req.file) ? req.file.filename : null;
    let { name, specification, lab, imageUrl, qrId } = req.body;
    let product = new Product({ user: req.user._id, name, specification: JSON.parse(specification), lab, imageUrl, qrId, productImage })
    await product.save();
    res.status(200).json({ message: "Product Added Successfully" });
});

// @desc    All Product
// @route   GET /product
// @access  Public

const allProduct = asyncHandler(async (req, res) => {
    const products = await Product.find({}).populate(
        'user lab',
        'name '
    );
    res.json(products);
});



// @desc    Delete Product
// @route   DEL /product
// @access  Public

const deleteProduct = asyncHandler(async (req, res) => {

    const product = await Product.findById(req.params.id);
    if (product) {
        product.remove();
        res.json({ message: "Product removed", success: true });
    }
    else {
        throw new Error("Product not Found")
    }
});


// @desc    update Product
// @route   UPDATE /product
// @access  Public

const updateProduct = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    const product = await Product.findById(_id);
    console.log(product)

    if (product) {
        product.productImage = (req.file) && req.file.filename || product.productImage;
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    }

    else {
        throw new Error("Product not Found")
    }

});


// @desc    update Product
// @route   UPDATE /product
// @access  Public

const updateProductData= asyncHandler(async (req, res) => {
    const { _id } = req.body;
    const product = await Product.findById(_id);
    console.log(product)

    if (product) {
        product.productImage = (req.file) && req.file.filename || product.productImage;
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    }

    else {
        throw new Error("Product not Found")
    }

});


// @desc    find product by qrId
// @route   POST /product/qrId
// @access  Public

const findProduct = asyncHandler(async (req, res) => {
    const { qrId } = req.body;
    const product = await Product.findOne({ qrId }).populate(
        'user lab',
        'name '
    );;
    if (product) {
        res.json({ product })
    }
    else {
        res.status(400);
        throw new Error("Product not Found");
    }
});



// @desc    find product by qrId
// @route   POST /product/qrId
// @access  Public

const findProductByLab = asyncHandler(async (req, res) => {
    const { lab } = req.body;
    
    const product = await Product.find({ lab });
    if (product) {
        res.json( product)
    }
    else {
        res.status(400);
        throw new Error("Product not Found");
    }
});



// @desc    find Product
// @route   find /product/:id
// @access  Public

const findProductById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (product) {
        res.json(product);
    }
    else {
        throw new Error("Product not Found")
    }

});




module.exports = {
    addProduct, allProduct, findProduct, deleteProduct, updateProduct, findProductById, findProductByLab
};
