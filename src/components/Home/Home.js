import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Home.css'

const Home = () => {
  const products = useLoaderData();
  return (
    <div className="home-container">
      <div className="products-container">
        {products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
      <div className="bg-slate-300">
          <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
