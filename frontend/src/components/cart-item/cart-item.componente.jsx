import React from 'react';

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;

  return (
    <div className="flex items-center space-x-4 mb-2">
      <img src={imageUrl} alt={name} className="w-16 h-16 object-cover rounded" />
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-gray-600">
          {quantity} x ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
