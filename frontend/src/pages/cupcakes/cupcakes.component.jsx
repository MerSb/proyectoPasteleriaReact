import React from 'react';
import ProductCard from '../../components/product-card/product-card.component';

const cupcakes = [
  {
    id: 1,
    name: 'Cupcake de Vainilla',
    imageUrl: '/src/assets/img/cupcake-vainilla.jpg', // Asegúrate de tener esta imagen
    price: 3.99,
  },
  {
    id: 2,
    name: 'Cupcake de Chocolate',
    imageUrl: '/src/assets/img/cupcake-chocolate.jpg',
    price: 4.99,
  },
  {
    id: 3,
    name: 'Cupcake Red Velvet',
    imageUrl: '/src/assets/img/cupcake-red-velvet.jpg',
    price: 4.49,
  },
  // Agrega más productos según sea necesario
];

const Cupcakes = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cupcakes Disponibles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cupcakes.map((cupcake) => (
          <ProductCard key={cupcake.id} product={cupcake} />
        ))}
      </div>
    </div>
  );
};

export default Cupcakes;