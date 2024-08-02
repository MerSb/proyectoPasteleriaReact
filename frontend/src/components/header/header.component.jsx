import React, { useState } from 'react';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 39.99, quantity: 1 },
  ]);

  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="flex justify-between items-center py-4">
      <h1 className="text-xl font-bold">Shop Logo</h1>
      <CartIcon itemCount={itemCount} toggleCartDropdown={toggleCartDropdown} />
      {isCartOpen && <CartDropdown cartItems={cartItems} />}
    </div>
  );
};

export default Header;
