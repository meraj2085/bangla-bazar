import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

export const ProductContext = createContext([])

const Layout = () => {
     const products = useLoaderData()
     return (
          <ProductContext.Provider value={products}>
               <Navbar></Navbar>
               <Outlet></Outlet>
          </ProductContext.Provider>
     );
};

export default Layout;