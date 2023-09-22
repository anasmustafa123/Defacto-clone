import React, { useState } from 'react';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const cartSize = cart.length;
  const [fav, setFav] = useState([]);  

  const addToFav = (item) => {
    setFav([...fav, item]); 
  };
  const favSize = fav.length;

  
  return (
    <UserContext.Provider value={{ cart, addToCart, cartSize,fav, addToFav, favSize }}>
      {children}
    </UserContext.Provider>
  );
};


export { UserContext, UserProvider };