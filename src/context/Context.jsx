import React, { useState, useEffect } from "react";
import { getUserItems, updateLocalStorage } from "../servises/backend";
import { isGuest } from "../servises/backend";
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return !isGuest() ? getUserItems("cart") : [];
  });
  const [fav, setFav] = useState(() => {
    return !isGuest() ? getUserItems("favorites") : [];
  });
  // updating local storage after setting the cart state
  useEffect(() => {
    console.log("cart changed");
    if (!isGuest()) {
      updateLocalStorage("cart", cart);
    }
  }, [cart]);
  useEffect(() => {
    console.log("favorites changed");
    if (!isGuest()) {
      updateLocalStorage("favorites", fav);
    }
  }, [fav]);
  const checkIfExist = (item) => {
    return cart.find((v) => {
      if (v["v"]["productId"] === item["v"]["productId"]) {
        return true;
      } else {
        return false;
      }
    });
  };
  const deleteItem = (item) => {
    let tempCart = [...cart];
    let itemIndex = tempCart.findIndex((v) => {
      if (v["v"]["productId"] === item["v"]["productId"]) {
        return true;
      } else {
        return false;
      }
    });
    tempCart.splice(itemIndex, 1);
    return tempCart;
  };
  const addToCart = (item) => {
    let returnedItem = checkIfExist(item);
    if (!returnedItem) {
      setCart([...cart, item]);
    } else {
      returnedItem["quantity"] += 1;
      let tempCart = deleteItem(returnedItem);
      setCart([...tempCart, returnedItem]);
    }
  };
  function incrementCart(item) {
    let temp = cart.map((v) => {
      if (v["v"]["productId"] === item["v"]["productId"]) {
        let newItem = v;
        newItem["quantity"] += 1;
        return newItem;
      } else return v;
    });
    setCart(temp);
  }
  function decrementCart(item) {
    let temp = cart.map((v) => {
      if (v["v"]["productId"] === item["v"]["productId"]) {
        let newItem = v;
        newItem["quantity"] -= 1;
        return newItem;
      } else return v;
    });
    setCart(temp);
  }
  function removeOneItem(item) {
    console.log(cart);
    let tempCart = deleteItem(item);
    console.log(tempCart);
    setCart(tempCart);
  }

  const cartSize = cart.length;

  const addToFav = (item) => {
    setFav([...fav, item]);
  };

  const removeFromFav = (item) => {
    let newFav = [...fav];
    newFav.forEach((i, index) => {
      if (i["productId"] === item["productId"]) {
        newFav.splice(index, 1);
      }
    });
    setFav(newFav);
  };

  const favSize = fav.length;

  const [isUserGuest, setIsUserGuest] = useState(isGuest());
  useEffect(() => {
    setIsUserGuest(isGuest());
  }, []);

  return (
    <UserContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        cartSize,
        fav,
        setFav,
        addToFav,
        favSize,
        checkIfExist,
        incrementCart,
        decrementCart,
        removeOneItem,
        removeFromFav,
        isUserGuest,
        setIsUserGuest
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
