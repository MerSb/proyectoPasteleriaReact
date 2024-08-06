import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart-context';
import logo from '../../assets/img/logu.png';

const Header = () => {
  const { cartItems, toggleCartDropdown } = useContext(CartContext);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  console.log(cartItems);

  return (
    <div className="flex justify-between items-center py-4 bg-black text-white">
      <Link to="/" className="text-xl font-bold">
      <img src={logo} alt="Shop Logo" className="w-12 h-12" />
      </Link>
      <div className="flex items-center">
        <CartIcon itemCount={itemCount} toggleCartDropdown={toggleCartDropdown} />
        <CartDropdown cartItems={cartItems} />
      </div>
    </div>
  );
};

export default Header;



