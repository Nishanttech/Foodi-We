import React from "react";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { NavLink, Route, Routes } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>FoodieWe</h1>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
              to="/service"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "red" : "" };
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
