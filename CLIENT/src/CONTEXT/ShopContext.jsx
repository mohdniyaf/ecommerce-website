import { createContext, useContext, useState } from "react";
import { products } from '../assets/assest';

// Shop Context
export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const shopContextValue = { products };

  return (
    <ShopContext.Provider value={shopContextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const shopContextValue = useContext(ShopContext);
  if (!shopContextValue) {
    throw new Error("useShop used outside of the Provider");
  }
  return shopContextValue;
};
