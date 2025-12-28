import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Import the new Navbar
import HomePage from './HomePage';
import Inventory from './Inventory';

function App() {
  return (
    <Router>
      {/* Navbar sits outside Routes so it shows on EVERY page */}
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  );
}

export default App;