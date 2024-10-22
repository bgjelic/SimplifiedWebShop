import React, { createContext, useState, useContext } from 'react';

// Create a context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (movie) => {
    // Check if the movie already exists in the cart
    const existingItem = cart.find(item => item.id === movie.id);

    if(existingItem){
        const updatedCart = cart.map(item =>
            item.id === movie.id
                ?{...item, quantity: item.quantity + 1}
                : item
        );
        setCart(updatedCart);
        alert(`Increased quantity of ${movie.title} to ${existingItem.quantity + 1}.`);
    }else{
        setCart((prevCart) => [...prevCart, {...movie, quantity: 1}]);
        alert(`${movie.title} added to your cart.`);
    }
  
};

  const removeFromCart = (movieId) => {
    const item = cart.find(movie => movie.id === movieId);

    if(item){
        if(item.quantity > 1){
            const action = window.confirm (`There are ${item.quantity} of ${item.title} in your cart.\nWould you like to remove one, remove all, or keep one?`);

            if(action){
                const choice = prompt("Enter 1 to remove one, 2 to remove all, or 3 to keep one.").trim();
                let updatedCart;
                if(choice === "1"){
                    //Remove one item
                    updatedCart = cart.map(movie =>
                        movie.id === movie.id
                            ? {...movie, quantity: movie.quantity - 1}
                            : movie
                    );
                    alert(`Removed one from ${item.title}. Now you have ${item.quantity - 1}.`);
                }else if(choice === "2"){
                    //Remove all items
                    updatedCart = cart.filter(movie => movie.id !== movie.id);
                    alert(`${item.title} removed from your cart.`);
                }else if(choice === "3"){
                    //Keep one and remove the rest
                    updatedCart = cart.map(movie =>
                        movie.id === movie.id
                            ? {...movie, quantity: 1}
                            : movie
                    );
                    alert(`Kept one ${item.title} in your cart.`);
                }else{
                    alert("Invalid choice. Please try again.");
                    return;
                }
                setCart(updatedCart);
                
            }
        }else{
            setCart((prevCart) => prevCart.filter(movie => movie.id !== movieId));
            alert(`${item.title} removed from your cart.`);
        }
    }



  };

  const updateQuantity = (id, quantity) => {
    const updateCart = cart.map(item =>
        item.id === id ? {...item, quantity} : item
    );
    setCart(updateCart);
  };

  const emptyCart = () => {
    setCart([]); // Clears the cart
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, emptyCart}}>
      {children}
    </CartContext.Provider>
  ); 
};

// Custom hook to use the CartContext
export const useCart = () => {
    return useContext(CartContext);
  };


  