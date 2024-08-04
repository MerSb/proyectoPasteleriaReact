import React from 'react';
import ProductCard from '../../components/product-card/product-card.component';

const cheesecakes = [
  {
    id: 1,
    name: 'Cheesecake Clásico',
    imageUrl: '/src/assets/img/cheesecake-clasico.jpg', // Asegúrate de tener esta imagen
    price: 8.99,
  },
  {
    id: 2,
    name: 'Cheesecake de Frutilla',
    imageUrl: '/src/assets/img/cheesecake-frutilla.jpg',
    price: 9.99,
  },
  {
    id: 3,
    name: 'Cheesecake de Arándanos',
    imageUrl: '/src/assets/img/cheesecake-arandanos.jpg',
    price: 10.99,
  },
  // Agrega más productos según sea necesario
];

const Cheesecake = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cheesecakes Disponibles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cheesecakes.map((cheesecake) => (
          <ProductCard key={cheesecake.id} product={cheesecake} />
        ))}
      </div>
    </div>
  );
};

export default Cheesecake;