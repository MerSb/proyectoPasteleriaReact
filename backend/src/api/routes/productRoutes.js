const express = require('express');
const { getAllProducts, createProduct } = require('../../api/controllers/productController');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', createProduct);

module.exports = router;
