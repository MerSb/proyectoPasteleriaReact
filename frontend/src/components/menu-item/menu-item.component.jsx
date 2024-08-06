import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`relative overflow-hidden ${size === 'large' ? 'w-full h-80' : 'w-1/2 h-60'} cursor-pointer mb-4`}
      onClick={() => navigate(linkUrl)}
      role="button"
      aria-label={`Navigate to ${title}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-300"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition-opacity duration-300" />
      <div className="relative z-10 text-white text-center p-4">
        <h2 className="text-2xl font-bold mb-2">{title.toUpperCase()}</h2>
        <span className="text-sm">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
