import React from 'react';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <div className="w-20">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <span className="flex-1 ml-4">{name}</span>
      <div className="flex items-center">
        <button onClick={() => removeItem(cartItem)} className="text-gray-600 hover:text-gray-800">
          &#10094;
        </button>
        <span className="mx-2">{quantity}</span>
        <button onClick={() => addItem(cartItem)} className="text-gray-600 hover:text-gray-800">
          &#10095;
        </button>
      </div>
      <span className="flex-1">${price.toFixed(2)}</span>
      <button onClick={() => clearItem(cartItem)} className="text-red-600 hover:text-red-800 ml-4">
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
