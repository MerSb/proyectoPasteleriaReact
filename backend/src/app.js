const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sequelize = require("../src/database/config/config");
const db = require('../src/database/models/index');
const mercadopago = require('mercadopago');
const paymentRoutes = require('./api/routes/paymentRoutes');

// Importing route files
const authRoutes = require("../src/api/routes/authRoutes");
const productRoutes = require("../src/api/routes/productRoutes");
const orderRoutes = require("../src/api/routes/orderRoutes");

const app = express();

// ************ Middlewares ************
app.use(methodOverride("_method"));
app.use(cors());

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ************ Routes ************
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
//app.use('/api/payments', paymentRoutes); 

// Sync database
db.sequelize.sync({ force: false }) // Use force: true to drop tables and recreate them
  .then(() => {
    console.log("Database connected and synced");
  })
  .catch((error) => {
    console.error("Failed to sync database:", error);
  });

// Set up Mercado Pago configurations
//mercadopago.configure({
//  access_token: 'aeecea3e11f2545d1e7790eb6591ff68df74c57930551ed980239f4538a7e530' 
//});

const port = process.env.PORT || 3737;
app.listen(port, () => {
  console.log(`El servidor está corriendo en http://localhost:${port} 🚀🚀🚀`);
});
