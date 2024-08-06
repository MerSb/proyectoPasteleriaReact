import React from 'react';
import ShoppingIcon from '../../assets/img/shopping-icon.png'; 

const CartIcon = ({ itemCount, toggleCartDropdown }) => {
  return (
    <div className="relative cursor-pointer" onClick={toggleCartDropdown}>
      <img 
        src={ShoppingIcon} 
        alt="Shopping Icon" 
        className="w-4 h-4 object-contain" 
      />
      <span className="absolute right-0 top-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
        {itemCount}
      </span>
    </div>
  );
};

export default CartIcon;
