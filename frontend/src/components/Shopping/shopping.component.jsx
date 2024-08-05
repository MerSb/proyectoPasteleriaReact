import React from 'react';

const Shopping = ({ cartItems }) => (
    <div>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );

  export default Shopping;
  