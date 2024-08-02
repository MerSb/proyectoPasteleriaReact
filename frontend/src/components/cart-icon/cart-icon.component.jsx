import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ itemCount, toggleCartDropdown }) => {
  return (
    <div className="relative cursor-pointer" onClick={toggleCartDropdown}>
      <ShoppingIcon className="w-6 h-6" />
      <span className="absolute right-0 top-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
        {itemCount}
      </span>
    </div>
  );
};

export default CartIcon;
