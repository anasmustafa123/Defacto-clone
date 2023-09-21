import React, { useState } from 'react';

const UserContext = React.createContext();
const FavContext = React.createContext();

const userProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const cartSize = cart.length;
  const [fav, setfav] = useState([]);

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


export { UserContext, userProvider };