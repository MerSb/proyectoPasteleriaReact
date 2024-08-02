import React from 'react';
import Directory from '../../components/directory/directory.component';

const sections = [
  {
    id: 1,
    title: 'Tartas',
    imageUrl: 'https://example.com/tartas.jpg',
    size: 'large',
    linkUrl: '/shop/tartas',
  },
  {
    id: 2,
    title: 'Cupcakes',
    imageUrl: 'https://example.com/cupcake.jpg',
    size: 'large',
    linkUrl: '/shop/cupcakes',
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
