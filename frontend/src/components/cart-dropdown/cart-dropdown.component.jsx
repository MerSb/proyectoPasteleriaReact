import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.componente';

const CartDropdown = ({ cartItems }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded shadow-lg z-50 p-4">
      <div className="flex flex-col space-y-4">
        {cartItems && cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="text-center text-gray-600">Your cart is empty</span>
        )}
      </div>
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white mt-4 py-2 px-4 w-full rounded hover:bg-blue-600"
      >
        Go to Checkout
      </button>
    </div>
  );
};

export default CartDropdown;
