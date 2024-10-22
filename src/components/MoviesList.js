import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const { addToCart } = useCart();

  return (
    <div className='movies-list'>
      <h2>Available Movies</h2>
      <div className='movie-items'>
      {movies.map((movie) => (
        <div className='movie-item' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Price: ${movie.price}</p>
            
                <button onClick={() => addToCart(movie)}>Add to Cart</button>
           
        </div>
      ))}
      </div>
    </div>
  );
};

export default MoviesList;