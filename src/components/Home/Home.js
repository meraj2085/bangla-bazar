import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);


  return (
    <div className="home-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            cart={cart}
            setCart={setCart}
          ></Product>
        ))}
      </div>
      <div className="bg-slate-300">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
