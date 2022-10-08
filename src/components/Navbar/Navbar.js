import { Link as a, Link } from "react-router-dom";

import React from "react";

const Navbar = () => {
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
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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
