const express = require("express");
const Product = require("../models/product.model");
const { getProducts, getProduct, makeProducts, updateProduct, deleteProduct } = require("../controller/product.controller");
const router = express.Router();

router.get('/', getProducts);

router.get("/:id", getProduct);

router.post("/", makeProducts);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;