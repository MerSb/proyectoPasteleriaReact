import React from 'react';
import ProductCard from '../../components/product-card/product-card.component';

const postres = [
  {
    id: 1,
    name: 'Flan',
    imageUrl: '/src/assets/img/flan.jpg', // Asegúrate de tener esta imagen
    price: 5.99,
  },
  {
    id: 2,
    name: 'Mousse de Chocolate',
    imageUrl: '/src/assets/img/mousse-chocolate.jpg',
    price: 6.99,
  },
  {
    id: 3,
    name: 'Tiramisú',
    imageUrl: '/src/assets/img/tiramisu.jpg',
    price: 7.99,
  },
  // Agrega más productos según sea necesario
];

const Postres = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Postres Disponibles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {postres.map((postre) => (
          <ProductCard key={postre.id} product={postre} />
        ))}
      </div>
    </div>
  );
};

export default Postres;