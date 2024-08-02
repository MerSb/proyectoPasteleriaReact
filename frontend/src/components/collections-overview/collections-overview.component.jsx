// src/components/collections-overview/collections-overview.component.jsx

import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionsOverview = ({ collections, addItem }) => {
  return (
    <div className="container mx-auto py-8">
      {collections.map(({ id, title, items }) => (
        <div key={id} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <div className="flex flex-wrap justify-start">
            {items.map((item) => (
              <CollectionItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionsOverview;
