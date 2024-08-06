// checkout-item.component.jsx
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

const CheckoutItem = ({ cartItem }) => {
  const { addItem, removeItem, clearItem } = useContext(CartContext);
  const { id, imageUrl, name, price, quantity } = cartItem;

  return (
    <div className="flex items-center justify-between border-b pb-2">
      <div className="flex items-center">
        <img src={imageUrl} alt={name} className="w-16 h-16 object-cover mr-4" />
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm text-gray-600">${price.toFixed(2)}</p>
          <p className="text-sm text-gray-600">Cantidad: {quantity}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={() => removeItem(cartItem)} className="text-red-600 mr-2">
          -
        </button>
        <button onClick={() => addItem(cartItem)} className="text-green-600 mr-2">
          +
        </button>
        <button onClick={() => clearItem(cartItem)} className="text-red-600">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;



