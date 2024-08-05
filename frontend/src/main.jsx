import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { CartProvider } from './contexts/cart-context';
import { initMercadoPago } from '@mercadopago/sdk-react';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Initialize Mercado Pago with your public key
initMercadoPago('https://api.mercadopago.com/v2/wallet_connect/agreements/{agreement_id}/payer_token');

root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);


