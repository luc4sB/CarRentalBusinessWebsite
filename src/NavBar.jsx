import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/NavBar.css";

const navlinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Login",
    link: "/login",
  },
];

const NavBar = () => {
  const location = useLocation();
  const isDefaultPage = location.pathname === "/";

  return (
    <div className="navbar">
      <ul>
        {navlinks.map((item) => (
          <li key={item.name}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
        {!isDefaultPage && (
          <li className="center-title">
            Car Rental Business
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
