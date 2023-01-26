import { createContext , useState } from "react"
import React from "react";

export const authContext = React.createContext();

export function AuthContextProvider({children}) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  function removeFromCart(item) {
    setCart(cart.filter(i => i !== item));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <authContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </authContext.Provider>
  );
}



export default AuthContextProvider ;

// value={{a: 1, b : 2}}
// const value = {a: 1, b : 2}