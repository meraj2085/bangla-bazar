import React, { useContext } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Home.css";
import { CartContext, ProductContext } from "../../Layout/Layout";

const Home = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);


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
