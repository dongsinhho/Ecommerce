const productModel = require('../model/product.model');

const productController = {
    getProducts: async (req, res) => {
        try {
            const products = productModel.find();
            console.log("ok được.")
            res.status(200).json({ products });
        }
        catch (error) {
            res.status(500).json({ msg: error });
        }
    },
    postProducts: async (req, res) => {
        try {
            const image = res.files;
            const { product_id, title, category, decription, price, stock } = req.body;

            if (!image) 
                return res.status(400).json({msg: "image type wrong"})
            
            const product = productModel.findOne({title: title});
            const productid = productModel.findOne({product_id: product_id});

            if (product) 
                return res.status(400).json({msg: "product title is exist"})
            if (productid) 
                return res.status(400).json({msg: "product_id is exist"})
            console.log(image)
            // const newProduct = new productModel({
            //     product_id, title, category, decription, price, image, stock, 
            // })
            // await newProduct.save();
            res.status(200).json({ msg: "Product created successful" });
        }
        catch (error) {
            res.status(500).json({ msg: error });

        }
    }
}

module.exports = productController;