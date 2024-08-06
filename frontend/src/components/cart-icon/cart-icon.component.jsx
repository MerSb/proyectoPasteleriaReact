import React from 'react';
//import { ReactComponent as ShoppingIcon } from '../../assets/img/shopping-bag.svg';<ShoppingIcon className="w-6 h-6" />

const CartIcon = ({ itemCount, toggleCartDropdown }) => {
  return (
    <div className="relative cursor-pointer" onClick={toggleCartDropdown}>
      {/* You can include a shopping icon here if desired */}
      <div className="shopping-icon">🛒</div>
      <span className="absolute right-0 top-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
        {itemCount}
      </span>
    </div>
  );
};

export default CartIcon;
