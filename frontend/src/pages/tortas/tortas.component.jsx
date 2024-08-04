import React from 'react';
import ProductCard from '../../components/product-card/product-card.component';

const tortas = [
  {
    id: 1,
    name: 'Torta de Zanahoria',
    imageUrl: '/src/assets/img/torta-zanahoria.jpg', // Asegúrate de tener esta imagen
    price: 15.99,
  },
  {
    id: 2,
    name: 'Torta de Chocolate',
    imageUrl: '/src/assets/img/torta-chocolate.jpg',
    price: 18.99,
  },
  {
    id: 3,
    name: 'Torta de Limón',
    imageUrl: '/src/assets/img/torta-limon.jpg',
    price: 14.99,
  },
  // Agrega más productos según sea necesario
];

const Tortas = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tortas Disponibles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tortas.map((torta) => (
          <ProductCard key={torta.id} product={torta} />
        ))}
      </div>
    </div>
  );
};

export default Tortas;