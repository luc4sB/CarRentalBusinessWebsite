import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/NavBar.css";
import { useState } from "react";
import { useEffect } from "react";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    // Checks if the user is already logged in
    const isLoggedInCookie = document.cookie.includes('isLoggedIn=true');
    setIsLoggedIn(isLoggedInCookie);
    
  }, []);
  const handleLogout = () => {
    document.cookie = 'isLoggedIn=false; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div id="navbar-items">
        <ul id="left-items">
          <li id="center-title">
            Car Rental Business
          </li>
        </ul>
        
        <ul id="center-items">
          <li key="home">
            <Link to="/">Home</Link>
          </li>
          
          <li key="login">
            <Link to="/login">{isLoggedIn ? "Profile" : "Login"}</Link>
          </li>
        </ul>
        
        <ul id="right-items">
          {isLoggedIn && 
            <li key="logout">
              <a onClick={handleLogout}>Logout</a>
            </li>
          }
        </ul>
        
      </div>
    </div>
  );
};

export default NavBar;
