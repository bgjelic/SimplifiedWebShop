import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartButton = () => {
  const { cart } = useCart();

  return (
    <Link to="/cart" className="cart-button">
      <button>
        🛒({cart.length})T({cart.reduce((acc, item) => acc + item.quantity, 0)})
      </button>
    </Link>
  );
};

export default CartButton;