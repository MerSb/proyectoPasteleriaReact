import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
  const { cartItems, addItem, removeItem, clearItem } = useContext(CartContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="flex flex-col space-y-4">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CheckoutItem
              key={cartItem.id}
              cartItem={cartItem}
              addItem={addItem}
              removeItem={removeItem}
              clearItem={clearItem}
            />
          ))
        ) : (
          <span className="text-center text-gray-600">Your cart is empty</span>
        )}
      </div>
    </div>
  );
};

export default Checkout;

