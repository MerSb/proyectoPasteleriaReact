const mercadopago = require('mercadopago');


mercadopago.configurations.setAccessToken('aeecea3e11f2545d1e7790eb6591ff68df74c57930551ed980239f4538a7e530');


async function createPreference(req, res) {
  const preference = {
    items: [
      {
        title: req.body.title,
        unit_price: req.body.price,
        quantity: req.body.quantity,
      },
    ],
    back_urls: {
      success: "http://localhost:3737///success",
      failure: "http://localhost:3737//failure",
      pending: "http://localhost:3737//pending"
    },
    auto_return: "approved",
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    res.json({ preferenceId: response.body.id });
  } catch (error) {
    console.error('Error creating preference:', error);
    res.status(500).json({ error: 'Failed to create preference' });
  }
}

module.exports = {
  createPreference,
};
