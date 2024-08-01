const express = require('express');
const orderController = require('../controllers/orderController');
const { createOrder, getUserOrders } = require('../controllers/orderController');
const { protect } = require('../../middleware/authMiddleware');

const router = express.Router();

router.post('/orders',  orderController.createOrder); //agregar despues protect,
router.get('/user-orders',  orderController.getUserOrders); //agregar despues protect,

module.exports = router;
