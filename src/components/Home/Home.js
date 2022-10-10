import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { getFromDb } from "../../utilities/fakeDataBase";
import "./Home.css";
import { ProductContext } from "../../Layout/Layout";

const Home = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getFromDb();
    const savedCart = [];
    for (const id in storedCart) {
      const quantity = storedCart[id];
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

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
