import React from "react";
import logo from '../../logo.svg';
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours company"/>
      <ul className="nav-links">
        <li>
          <a href="landing" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="tour" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/tourlist" className="nav-link active">
            Stories
          </a>
        </li>
      </ul>
    </nav>
  );
}
