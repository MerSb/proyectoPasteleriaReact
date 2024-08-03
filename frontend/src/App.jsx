import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Checkout from './pages/checkout/checkout.component';
import Shop from './pages/shop/shop.component';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in-sign-up" element={<SignInSignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;

