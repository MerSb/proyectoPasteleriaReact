module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
    },
  }, {
    timestamps: true,
  });

 // Order.associate = (models) => {
   // Order.belongsTo(models.User, { foreignKey: 'userId' });
    //Order.hasMany(models.OrderItem, { foreignKey: 'orderId' });
 // };

  return Order;
};

