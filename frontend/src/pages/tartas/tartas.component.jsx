import React from 'react';
import ProductCard from '../../components/product-card/product-card.component';

const tartas = [
  {
    id: 1,
    name: 'Tarta de Chocolate',
    imageUrl: '/src/assets/img/tarta-chocolate.jpg', // Ruta a tu imagen
    price: 10.99,
  },
  {
    id: 2,
    name: 'Tarta de Frutilla',
    imageUrl: '/src/assets/img/tarta-fresa.jpg',
    price: 12.99,
  },
  {
    id: 3,
    name: 'Tarta de Lemon Pie',
    imageUrl: '/src/assets/img/tarta-manzana.jpg',
    price: 9.99,
  },
  {
    id: 4,
    name: 'Tarta de Durazno',
    imageUrl: '/src/assets/img/tarta-manzana.jpg',
    price: 9.99,
  },
  {
    id: 5,
    name: 'Tarta de Coco y Dulce de Leche',
    imageUrl: '/src/assets/img/tarta-manzana.jpg',
    price: 9.99,
  },
  {
    id: 6,
    name: 'Tarta de Frutas',
    imageUrl: '/src/assets/img/tarta-manzana.jpg',
    price: 9.99,
  },
  {
    id: 7,
    name: 'Tarta de Banana Split',
    imageUrl: '/src/assets/img/tarta-manzana.jpg',
    price: 9.99,
  },
  
];

const Tartas = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tartas Disponibles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tartas.map((tarta) => (
          <ProductCard key={tarta.id} product={tarta} />
        ))}
      </div>
    </div>
  );
};

export default Tartas;
