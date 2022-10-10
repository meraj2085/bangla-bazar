import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const Layout = () => {
  const {products, savedCart} = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default Layout;
