import React from "react";
import './Cart.css'

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart sticky top-0 px-5 py-8">
        <h4 className="text-3xl">Order Summary</h4>
        <p className="text-xl">Selected Items: </p>
        <p className="text-xl">Total price: $</p>
        <p className="text-xl">Total Shipping: $</p>
        <p className="text-xl">Tax: </p>
        <h5 className="text-lg">Grand Total: </h5>
        <button className="text-lg">Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
