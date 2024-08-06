import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Checkout from './pages/checkout/checkout.component';
import Shop from './pages/shop/shop.component';
import Tartas from './pages/tartas/tartas.component';
import Tortas from './pages/tortas/tortas.component';
import Cupcakes from './pages/cupcakes/cupcakes.component';
import Postres from './pages/postres/postres.component';
import Cheesecake from './pages/cheesecake/cheesecake.component';
//import Cart from './pages/cart/cart.component';<Route path="/cart" element={<Cart />} />
import { CartProvider } from './contexts/cart-context';

function App() {
  return (
    <CartProvider>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in-sign-up" element={<SignInSignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/tartas" element={<Tartas />} />
        <Route path="/shop/tortas" element={<Tortas />} />
        <Route path="/shop/cupcakes" element={<Cupcakes />} />
        <Route path="/shop/postres" element={<Postres />} />
        <Route path="/shop/cheesecake" element={<Cheesecake />} />
        
      </Routes>
    </>
    </CartProvider>
  );
}

export default App;

