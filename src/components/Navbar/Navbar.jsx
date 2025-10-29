import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container" >
      <div className="navbar-container">
        <nav className="nav-bar">
          <div className="logo">
            <a href="#">
              <img src='/images/logo.png' alt="logo" />
            </a>
          </div>

          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={25} color="#0961A1" /> : <FaBars size={25} color="#0961A1" />}
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Specialities</a></li>
            <li><a href="#">Scans</a></li>
            <li><a href="#">Packages</a></li>
            <li><a href="#">Our Branches</a></li>
            <li><a href="#">About us</a></li>
          </ul>

          <div className="nav-right">
            <div className="icon-circle">
              <IoMdSearch size={22} color="#0961A1" />
            </div>
            <button className="btn-appointment">Book Appointment</button>
          </div>
        </nav>
      </div>
    </div>
    
  );
};

export default Navbar;
