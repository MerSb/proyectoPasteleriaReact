import React from 'react';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  const baseStyles = 'py-2 px-4 font-semibold rounded focus:outline-none';

  const googleSignInStyles = isGoogleSignIn
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : '';

  const invertedStyles = inverted
    ? 'bg-white text-gray-800 border border-gray-800 hover:bg-gray-200'
    : 'bg-gray-800 text-white hover:bg-gray-900';

  const buttonStyles = `${baseStyles} ${googleSignInStyles} ${invertedStyles}`;

  return (
    <button className={buttonStyles} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
