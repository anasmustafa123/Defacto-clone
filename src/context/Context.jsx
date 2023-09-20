import React, { useState } from 'react';

const Context = React.createContext();

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const cartSize = cart.length;

  return (
    <Context.Provider value={{ cart, addToCart, cartSize }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };