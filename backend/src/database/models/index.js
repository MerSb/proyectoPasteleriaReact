'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env]; // Ensure you're using the correct environment configuration
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], {
    dialect: config.dialect, // Ensure dialect is provided
  });
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect, // Ensure dialect is provided
  });
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Define associations (if needed, since they can also be in model files)
db.User.hasMany(db.Order, { foreignKey: 'userId' });
db.Order.belongsTo(db.User, { foreignKey: 'userId' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


