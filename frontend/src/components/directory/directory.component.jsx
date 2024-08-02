import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => {
  return (
    <div className="flex flex-wrap justify-between">
      {sections.map(({ id, title, imageUrl, size, linkUrl }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
      ))}
    </div>
  );
};

export default Directory;
