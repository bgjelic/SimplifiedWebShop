import React from 'react';

const MovieItem = ({ movie, addToCart }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <button onClick={() => {
        console.log('Button clicked for:', movie); // Debug log
        addToCart(movie);
      }}>
        Add to Cart
      </button>
    </div>
  );
};

export default MovieItem;