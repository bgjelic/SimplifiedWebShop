import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import MoviesList from './components/MoviesList';
import Cart from './components/Cart';
import CartButton from './components/CartButton';
import { Link } from 'react-router-dom'; 

const App = () => {
  const movies = [
    { id: 1, title: 'Inception', price: 10 },
    { id: 2, title: 'Interstellar', price: 12 },
    { id: 3, title: 'The Dark Knight', price: 15 },
    { id: 4, title: 'Titanic', price: 8 },
    { id: 5, title: 'The Godfather', price: 14 },
    { id: 6, title: 'Pulp Fiction', price: 11 },
    { id: 7, title: 'Forrest Gump', price: 10 },
    { id: 8, title: 'The Matrix', price: 12 },
    { id: 9, title: 'Fight Club', price: 9 },
    { id: 10, title: 'The Shawshank Redemption', price: 13 },
    { id: 11, title: 'Gladiator', price: 11 },
    { id: 12, title: 'The Social Network', price: 9 },
    { id: 13, title: 'The Avengers', price: 12 },
    { id: 14, title: 'Spider-Man: No Way Home', price: 16 },
    { id: 15, title: 'Jurassic Park', price: 10 },
    { id: 16, title: 'Frozen', price: 8 },
    { id: 17, title: 'The Lion King', price: 9 },
    { id: 18, title: 'Toy Story', price: 7 },
    { id: 19, title: 'Black Panther', price: 13 },
    { id: 20, title: 'The Silence of the Lambs', price: 12 },
    { id: 21, title: 'Star Wars: A New Hope', price: 15 }
  ];

  return (
    <CartProvider>
      <Router>
      <header class="header">
        <div class="logo">Movie App</div>
        <nav class="nav">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div>
          <CartButton />
        </div>
      </header>  
        <Routes>
          <Route path="/" element={<MoviesList movies={movies} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<Cart />} />
          <Route path="/contact" element={<Cart />} />
        </Routes>
        <footer class="footer">
          <div class="footer-content">
            <p>&copy; 2024 My Movie App. All Rights Reserved. bgjelic@gmail.com</p>
            <nav class="footer-nav">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/contact">Contact Us</Link>
            </nav>
          </div>
        </footer>
      </Router>
    </CartProvider>
  );
};

export default App;