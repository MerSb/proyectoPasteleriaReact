import React from 'react';

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
