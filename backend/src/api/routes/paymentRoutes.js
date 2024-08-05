const express = require('express');
const router = express.Router();
const { createPaymentPreference } = require('../controllers/paymentController');

router.post('/create-preference', createPaymentPreference);

module.exports = router;
