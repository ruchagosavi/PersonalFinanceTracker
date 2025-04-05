import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../ThemeContext';
import budgeticon from '../pages/budget.png';

import "./Navbar.css";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext); // use context

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid ms-4">

       {/* Brand */}
      <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <img
          src={budgeticon}
          alt="WalletWise"
          style={{ height: "30px" }}
        />
        <span className={`ms-2 fw-bold fs-4 ${darkMode ? 'text-light' : 'text-dark'}`}>
          WalletWise
        </span>
      </NavLink>


        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto align-items-center">
          
            <li className="nav-item me-5">
              <NavLink className="nav-link fs-5" to="/contact">Home</NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink className="nav-link fs-5" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink className="nav-link fs-5" to="/gameforge">GameForge</NavLink>
            </li>

            <li className="nav-item dropdown me-5">
              <a
                className="nav-link dropdown-toggle fs-5"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tools
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item fs-5" to="/analytics">Analytics</NavLink></li>
                <li><NavLink className="dropdown-item fs-5" to="/expenses">View Expenses</NavLink></li>
                <li><NavLink className="dropdown-item fs-5" to="/budget">Set Budget</NavLink></li>
                
{/* 

                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className="dropdown-item fs-5" to="/mapgenerator">Know Your Past</NavLink></li>
                <li><NavLink className="dropdown-item fs-5" to="/currentmapgenerator">Know Your Current</NavLink></li> */}
              </ul>
            </li>

            {/* <li className="nav-item me-5">
              <NavLink className="nav-link fs-5" to="/signin">Sign In</NavLink>
            </li> */}

            {/* 🌙 Dark Mode Toggle */}
            <li className="nav-item me-4">
              <button
                className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'}`}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
