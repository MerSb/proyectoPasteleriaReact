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
    <div className="homepage">
      <Directory sections={sections} />
    </div>
  );
};

export default Homepage;
