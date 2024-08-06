import React, { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (itemToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemToAdd.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...itemToAdd, quantity: 1 }];
    });
  };

  const removeItem = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearItem = (itemToClear) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemToClear.id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearItem }}>
     {children}
    </CartContext.Provider>
   );
};

