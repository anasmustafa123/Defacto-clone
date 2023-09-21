import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([{
    sizing: {},
    brandName: "Madewell",
    productId: "9911932",
    originalPrice: "$88.00",
    colorId: 1060946,
    percentOff: "0%",
    isNew: "true",
    reviewRating: 0.0,
    productName: "Mockneck Crop Sweater",
    thumbnailImageUrl: null,
    styleId: "6312046",
    price: "$88.00",
    msaImageId: "81tH+aNnW-L",
    onSale: "false",
    productUrl:
      "https://www.zappos.com/p/madewell-mockneck-crop-sweater-heather-dark-forest/product/9911932/color/1060946",
    animationImages: [],
    productRating: 0,
  }]);

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