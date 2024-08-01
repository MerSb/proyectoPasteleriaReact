const { Order } = require('../../database/models/Order');

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { userId: req.user.id } });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};
