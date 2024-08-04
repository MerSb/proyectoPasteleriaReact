import React, { createContext, useState } from 'react';

// Crea el contexto del carrito
export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  buyAllItems: () => {},
});

// Componente proveedor del carrito
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Si el producto no está en el carrito, añádelo con cantidad 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeItemFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const buyAllItems = () => {
    // Lógica para procesar la compra de todos los artículos
    // Esto podría incluir vaciar el carrito o enviar datos al servidor
    console.log('Comprando todos los artículos', cartItems);
    // Aquí podrías enviar los datos al backend
    setCartItems([]); // Vaciar el carrito después de la compra
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, buyAllItems }}>
      {children}
    </CartContext.Provider>
  );
};

