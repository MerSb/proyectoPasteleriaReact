import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

const ProductCard = ({ product }) => {

  const { addItem } = useContext(CartContext);

  const { name, price, imageUrl } = product;

  return (
    <div className="border rounded-lg p-4">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover mb-2" />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-600">${price.toFixed(2)}</p>
      <button
        onClick={() => addItem(product)}
        className="mt-2 w-full bg-black text-white py-1 rounded"
      >
        Añadir al Carrito
      </button>
    </div>
  );
};

export default ProductCard;


