import React, { useState, useEffect } from "react";
import { getUserItems, updateLocalStorage } from "../servises/backend";
import { isGuest } from "../servises/backend";
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  // setting cart items state variable
  const [cart, setCart] = useState(() => {
    return !isGuest() ? getUserItems("cart") : [];
  });
  // updating local storage after setting the cart state
  useEffect(() => {
    console.log("cart changed");
    if (!isGuest()) {
      updateLocalStorage("cart", cart);
    }
  }, [cart]);
  // setting favorite items state variable
  const [fav, setFav] = useState(() => {
    return !isGuest() ? getUserItems("favorites") : [];
  });
  // updating local storage after setting the favorite state
  useEffect(() => {
    console.log("favorites changed");
    if (!isGuest()) {
      updateLocalStorage("favorites", fav);
    }
  }, [fav]);
  // cart functions
  //1- check if item exists in cart
  const checkIfExist = (item) => {
    return cart.find((singleItem) => {
      if (singleItem["v"]["productId"] === item["v"]["productId"]) {
        return true;
      } else {
        return false;
      }
    });
  };
  // 2-
  const addToCart = (item) => {
    let returnedItem = checkIfExist(item);
    if (!returnedItem) {
      setCart([...cart, item]);
    } else {
      incrementCart(item);
    }
  };
  //3-
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
  // 4- delete item from cart /returns new array
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
    let tempCart = deleteItem(item);
    setCart(tempCart);
  }

  const cartSize = cart.length;
  // editing favorites
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
  /* end of favorites */

  // set if user is a guest
  const [isUserGuest, setIsUserGuest] = useState(isGuest());
  useEffect(() => {
    setIsUserGuest(isGuest());
  }, []);

  const isHearted = (item)=> fav.find((f)=>f["productId"]==item["productId"])

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
        setIsUserGuest,
        isHearted
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
