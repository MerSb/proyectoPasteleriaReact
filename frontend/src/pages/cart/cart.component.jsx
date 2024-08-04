import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

const Cart = () => {
  const { cartItems, removeItemFromCart, buyAllItems } = useContext(CartContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => removeItemFromCart(item.id)}
                className="text-red-600"
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            onClick={buyAllItems}
            className="bg-blue-500 text-white mt-4 py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Comprar todo
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
