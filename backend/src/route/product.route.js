const express = require("express");
const router = express.Router()
const multer  = require('multer')

const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, '.\\uploads\\');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	}
});
const upload = multer({
	storage,
	limits: {
		fileSize: 1024 * 1024 * 5
	},
	fileFilter
});

const productController = require("../controller/product.controller")

router.route("/products")
    .get(productController.getProducts)
    .post(upload.array('image'), productController.postProducts);

module.exports = router;