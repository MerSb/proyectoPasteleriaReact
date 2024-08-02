import React from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = ({ cartItems, addItem, removeItem, clearItem }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div>
        {cartItems.map((cartItem) => (
          <CheckoutItem
            key={cartItem.id}
            cartItem={cartItem}
            addItem={addItem}
            removeItem={removeItem}
            clearItem={clearItem}
          />
        ))}
      </div>
      <div className="text-right mt-4">
        <span className="text-xl font-semibold">
          Total: $
          {cartItems.reduce(
            (total, cartItem) => total + cartItem.price * cartItem.quantity,
            0
          ).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Checkout;
