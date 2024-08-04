import axios from 'axios';

const API_URL = 'http://localhost:3737/api'; 

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const createOrder = async (orderData) => {
  const response = await axios.post(`${API_URL}/orders`, orderData);
  return response.data;
};

export const signInUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/users/signin`, credentials);
  return response.data;
};

export const signUp = async (userData) => {
    const response = await axios.post(`${API_URL}/users/signup`, userData);
    return response.data;
  };
