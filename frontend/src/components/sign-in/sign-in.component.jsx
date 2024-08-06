import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import { signInUser } from '../apiService';
import loginBackground from '../../assets/img/login-background.png';
import { Link } from 'react-router-dom'; // Import Link for routing

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInUser(formData);
      console.log('User signed in:', response);
      // Handle successful sign-in, such as storing tokens or redirecting
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle errors, such as showing an error message
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${loginBackground})` }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            handleChange={handleChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            handleChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">¿Olvidaste tu contraseña?</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
