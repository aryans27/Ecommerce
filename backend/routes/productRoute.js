const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProductDetails).post(createProduct).put(updateProduct).delete(deleteProduct);
router.route("/product/new");

module.exports = router
