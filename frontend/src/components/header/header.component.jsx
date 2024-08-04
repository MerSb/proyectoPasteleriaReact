import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart-context';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
console.log(cartItems)
  return (
    <div className="flex justify-between items-center py-4 bg-black text-white">
      <Link to="/" className="text-xl font-bold">
        Shop Logo
      </Link>
      <div className="flex items-center">
        <Link to="/cart" className="mr-4">
          Carrito ({itemCount})
        </Link>
        <CartIcon />
        <CartDropdown><Shopping cartItems = {cartItems}/></CartDropdown> 
      </div>
    </div>
  );
};

export default Header;

