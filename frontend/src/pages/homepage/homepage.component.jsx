import React from 'react';
import Directory from '../../components/directory/directory.component';
import iconoTarta from '../../assets/img/icono-tarta.png'
import iconoCheesecake from '../../assets/img/icono-cheesecake.png'
import iconoTorta from '../../assets/img/icono-torta.png'
import iconoCupcake from '../../assets/img/icono-cupcake.png'
import iconoPostre from '../../assets/img/icono-alfajor.png'

const sections = [
  {
    id: 1,
    title: 'Tartas',
    imageUrl: iconoTarta,
    size: 'large',
    linkUrl: '/shop/tartas',
  },
  {
    id: 2,
    title: 'Cupcakes',
    imageUrl: iconoCupcake,
    size: 'large',
    linkUrl: '/shop/cupcakes',
  },
  {
    id: 3,
    title: 'Tortas',
    imageUrl: iconoTorta,
    size: 'large',
    linkUrl: '/shop/tortas',
  },
  {
    id: 4,
    title: 'Postres',
    imageUrl: iconoPostre,
    size: 'large',
    linkUrl: '/shop/postres',
  },
  {
    id: 5,
    title: 'Cheesecake',
    imageUrl: iconoCheesecake,
    size: 'large',
    linkUrl: '/shop/cheesecake',
  },
  // Add more sections as needed
];

const Homepage = () => {
  return (
    <div className="homepage min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {sections.map(({ id, title, imageUrl, linkUrl }) => (
          <div
            key={id}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">{title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;