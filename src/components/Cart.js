import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom'; // Import the Link component

const Cart = () => {
  const { cart, removeFromCart, emptyCart } = useCart();

  // Calculate the total price
  const totalPrice = cart.reduce((acc, movie) => acc + movie.price * movie.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    alert('Thank you for testing this app. Have a nice day!');
  }

  const handleEmptyCart = () => {
    if (window.confirm("Are you sure you want to empty the cart?")) {
        emptyCart();
    }
};

  return (
    <div className='cart'>
      <h2>Your Cart</h2>
      <div className='cart-items'>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map(movie => (
            <div className='cart-item' key={movie.id}>
              <h3>{movie.title}</h3>
              <p>${movie.price.toFixed(2)} (x{movie.quantity})</p> 
              <button className='remove-button' onClick={() => removeFromCart(movie.id)}>Remove</button>
            </div>
          ))}
        </ul>
      )}
      {cart.length > 0 && 
      (
        <div className='cart-summary'>
            <h3>Total Price: ${totalPrice}</h3>
            <button className='checkout-button' onClick={handleCheckout}>Checkout</button>
            <button className='empty-cart-button' onClick={handleEmptyCart}>Empty cart</button>
        </div>
      )}
      </div>
      <Link to="/" className='black-link'>Back to Movies</Link>
    </div>
  );
};

export default Cart;