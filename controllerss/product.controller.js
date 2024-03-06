let Product = require('../models/product.schema');

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, category, manufacturer, inStock, stockQuantity } = req.body

        const payload = { name, description, price, category, manufacturer, inStock, stockQuantity }

        const data = await new Product(payload).save();
        res.status(201).json({
            status: true,
            message: 'Product created successfully',
            data
        })
    } catch (err) {
        res.send(err.message)
    }
}
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const { name, description, price, category, manufacturer, inStock, stockQuantity } = req.body

        const payload = { name, description, price, category, manufacturer, inStock, stockQuantity }
        let data = await Product.findOneAndUpdate(
            { _id: id },
            { $set: payload },
            { new: true }
        )

        res.status(200).json({
            status: true,
            message: 'Product updated successfully',
            data
        })
    } catch (err) {
        res.send(err.message)
    }
}
exports.getProduct = async (req, res) => {
    try {
        /*
        * Applying pagination >>>
        * pageNumber : which page user want to see
        * limit : How many document per page user want to see
        */
        const page = +req.query.pageNumber || 1;
        const limit = +req.query.limit || 2;
        const skip = (page - 1) * limit;

        const products = await Product.find({}).skip(skip).limit(limit);

        res.status(200).json({
            status: true,
            message: 'Products fetched successfully',
            data: products
        })
    } catch (error) {
        console.error('Error retrieving products:', error);
    }
}
exports.deleteProduct = async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: true,
            message: 'Product deleted successfully',
            data: data
        })
    } catch (err) {
        res.send(err.message)
    }
}