const express = require('express');
const orderController = require('../controller/orderController');
const router = express.Router();

router.route('/').get(orderController.getAllOrder).post(orderController.createOrder);
router.route('/:id').put(orderController.updateOrder).delete(orderController.deleteOrder);

module.exports = router;