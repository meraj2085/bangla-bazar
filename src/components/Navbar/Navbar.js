import { Link } from "react-router-dom";

import React, { useContext } from "react";
import { CartContext } from "../../Layout/Layout";

const Navbar = () => {
  const [cart] = useContext(CartContext);
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
          <p className="btn btn-ghost normal-case text-2xl">
            <span className="text-orange-500">Bangla</span> Bazar
          </p>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cartDetails" className="relative px-3">
                <span>Cart</span>
                <span className="absolute top-0 left-10">{cart.length}</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
