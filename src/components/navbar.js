import React from 'react';
import Logo from "../Images/logo.png";
import "./navbar.css";


function Navbar() {
  return (
        <>
        <div class="donation-bar">
        <div class="donate-text">Welcome to <strong>Empathion</strong></div>
        <div class="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" class="icon-box"><i class="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" class="icon-box"><i class="fab fa-instagram"></i></a>
            <a href="https://aedin.com" target="_blank" rel="noreferrer" class="icon-box"><i class="fab fa-aedin-in"></i></a>
        </div>
        </div>
    <header>
    <img src={Logo} alt="NGO Logo" class="logo"/>
    <nav id="navbar">
      <ul>
        <li><a href="./Whoarewe">Who We Are</a></li>
        <li><a href="./Projects">Projects</a></li>
        <li><a href="#donations">Donations</a></li>
        <li><a href="./Volunteer">Volunteering</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
    </header>
        </>
  );
}

export default Navbar;
