import axios from 'axios';

const API_URL = 'http://localhost:3737/api'; // Update with your backend's base URL

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
