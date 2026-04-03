import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
  return (
    <div className="header-container">
      <h3 className="logo">My Website</h3>

      <nav className="Header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signin">SignIN</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
      </nav>
    </div>
  );
};

export default Navber;