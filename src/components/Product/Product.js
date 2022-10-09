import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, cart, setCart }) => {
  const { name, price, img, ratings, seller } = product;

  const handleAddToCart = () =>{
    let newCart = [];
    const exist = cart.find(existingProduct => existingProduct.id === product.id);
    if(!exist){
      product.quantity = 1;
      newCart = [...cart, product]
    }
    else{
      const rest = cart.filter(existingProduct => existingProduct.id !== product.id)
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist]
    }
    setCart(newCart)
  }

  return (
    <div className="product">
      <img src={img} alt=""></img>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button onClick={handleAddToCart} className="btn-cart py-3 text-white">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
