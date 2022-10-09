import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let quantity = 0;
  let price = 0;
  let shipping = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  }
  const tax = parseFloat(((price + shipping) * 0.1).toFixed(2));
  const grandTotal = price + shipping + tax;

  return (
    <div className="cart">
      <div className="cart sticky top-0 px-5 py-8">
        <h4 className="text-3xl font-semibold">Order Summary</h4>
        <div className="ml-5 mt-5">
          <p className="text-xl">Selected Items: {quantity}</p>
          <p className="text-xl">Total price: $ {price}</p>
          <p className="text-xl">Total Shipping: ${shipping}</p>
          <p className="text-xl">Tax: {tax}</p>
          <p className="text-lg">Grand Total: {grandTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
