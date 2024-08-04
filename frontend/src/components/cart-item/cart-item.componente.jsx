import React from 'react';
import tartasImage from '../../assets/img/tarta-frutilla.jpg';

const CartItem = ({ item }) => {
  if (!item) return null; 

  const { imageUrl, name, price, quantity } = item;

  return (
    <div className="flex items-center space-x-4 mb-2">
      <img src={imageUrl || 'default-image.png'} alt={name} className="w-16 h-16 object-cover rounded" />
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800">{name || 'Unknown Item'}</h4>
        <p className="text-gray-600">
          {quantity || 0} x ${price ? price.toFixed(2) : '0.00'}
        </p>
      </div>
    </div>
  );
};

export default CartItem;

