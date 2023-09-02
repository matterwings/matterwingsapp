import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ServicesPage from './components/ServicesPage';
import Dashboard from './components/Dashboard';
import OrderPage from './components/OrderPage';
import Checkout from './components/Checkout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
