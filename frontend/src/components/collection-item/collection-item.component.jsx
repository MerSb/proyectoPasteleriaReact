import React from 'react';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="relative flex flex-col items-center w-60 h-80 bg-white rounded overflow-hidden shadow-lg m-2">
      <div
        className="w-full h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="flex justify-between items-center w-full p-2">
        <span className="text-lg font-semibold">{name}</span>
        <span className="text-lg">${price.toFixed(2)}</span>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 absolute bottom-0 w-full"
        onClick={() => addItem(item)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CollectionItem;
