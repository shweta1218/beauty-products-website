import React ,{ createContext, useEffect, useState } from "react";
import { product_lists } from "../assets/assets";

// Create the context
export const StoreContext = createContext(null); // Optionally set a default value, e.g., createContext({})

const StoreContextProvider = (props) => {
   // Use destructuring to extract children
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }

  const removeFromCart = (itemId) => {
    if (cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems){
      if (cartItems[item]>0){
        let itemInfo = product_lists.find((product)=>product._id == item)
        totalAmount += itemInfo.price*cartItems[item];
      } 
    }
    return totalAmount;
  }

  const contextValue = {
    product_lists,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
