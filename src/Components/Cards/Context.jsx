
import { createContext, useState } from "react";
import React from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [searchText, setSearchText] = useState("");
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

const removeFromCart=(id)=>{
  setCart(prev=>
    prev.filter(item=>item.id!==id)
  );
};

const updateQuantity = (id, quantity) => {
  setCart(cart =>
    cart.map(p =>
      p.id === id ? { ...p, quantity } : p
    )
  );
}


  return (
    <CartContext.Provider value={{ cart, addToCart ,removeFromCart,searchText,setSearchText,updateQuantity}}>
      {children}
    </CartContext.Provider>
  );
}

