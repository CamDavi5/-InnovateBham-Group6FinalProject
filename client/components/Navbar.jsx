import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="menu">
        <nav>
          <ul>
            <li>
            <Link to="/" id="navlink">Home</Link>
            </li>
            <li>
            <Link to="/Login" id="navlink">Login</Link>
            </li>
            <li>
            <Link to="/Profile" id="navlink">Profile</Link>
            </li>
            <li>
            <Link to="/Categories" id="navlink">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
