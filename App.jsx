import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Paradise Nursery</h1>

        <p>
          Discover beautiful indoor plants that bring freshness and happiness
          to your home.
        </p>

        <Link to="/products">
          <button className="get-started-btn">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
