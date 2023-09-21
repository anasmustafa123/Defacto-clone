import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const cartSize = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, cartSize }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };