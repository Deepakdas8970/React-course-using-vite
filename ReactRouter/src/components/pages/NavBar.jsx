import React from 'react'
import {NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <header>
        <a href="#">logo</a>
        <ul
          style={{ display: "flex", flexDirection: "row", listStyle: "none" }}
        >
          <li className="items">
            <NavLink to="/" className="navlink">
              Home
            </NavLink>
          </li>
          <li className="items">
            <NavLink to="/about" className="navlink">
              About
            </NavLink>
          </li>
          <li className="items">
            <NavLink to="/services" className="navlink">
              Services
            </NavLink>
          </li>
          <li className="items">
            <NavLink to="/contact" className="navlink">
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  )
}

export default NavBar