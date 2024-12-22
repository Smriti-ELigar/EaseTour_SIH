import React from "react";
import "./Footer.css"; // Optional for additional styling

function Footer() {
  return (
    <footer className="footer bg-dark text-white">
      <div className="d-flex justify-content-between align-items-center p-3">
        <div>
          <button id="callButton" className="btn btn-warning">
            Activate Safety Alert
          </button>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="helplineDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Emergency Helplines
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="helplineDropdown"
          >
            <li><a className="dropdown-item" href="#">100 - Police</a></li>
            <li><a className="dropdown-item" href="#">101 - Fire</a></li>
            <li><a className="dropdown-item" href="#">108 - Ambulance</a></li>
            <li><a className="dropdown-item" href="#">104 - Hospital On Wheels</a></li>
            <li><a className="dropdown-item" href="#">1073 - Road Accident</a></li>
            <li><a className="dropdown-item" href="#">1098 - Child Helpline</a></li>
            <li><a className="dropdown-item" href="#">1091 - Women Helpline</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
