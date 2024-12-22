import React from "react";
import logo from "./logo2.jpg";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="EaseTour" className="rounded-circle" id="logo"style={{height:"70px"}} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Itinerary.html">AI Itinerary</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="destinationsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Destinations
              </a>
              <ul className="dropdown-menu" aria-labelledby="destinationsDropdown">
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#">North India</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" data-city="delhi">Delhi</a></li>
                    <li><a className="dropdown-item" href="#">Punjab</a></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#">South India</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" data-city="Karnataka">Karnataka</a></li>
                    <li><a className="dropdown-item" href="#">Kerala</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Govt Websites</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
