const Product = require('../moduls/product.module.js');

const getProducts = async (req,res)=>{
    try{
        const product = await Product.find({});
        res.status(201).json(product); 
    } catch(error){
        res.status(500).json({ message: error.message });
    }
};

const getProduct = async (req,res)=>{
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(201).json(product); 
    } catch(error){
        res.status(500).json({ message: error.message });
    }
};
 const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
 };
 const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;  // Get product ID from URL
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct =  async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    getProducts , 
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}