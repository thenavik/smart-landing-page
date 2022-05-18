import React from "react";
import { BsCart4 } from "react-icons/bs";
import "../../styles/header/header.scss";

export default function Header() {
  return (
    <div className="header-section">
      <header className="header">
        <div className="xcontainer">
          <nav className="navbar">
            <img src="https://themehoster.com/tf/html/tm/buten/demo/assets/images/logo.png" />
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#">Home</a>
              </li>
              <li className="navbar-item">
                <a href="#">About</a>
              </li>
              <li className="navbar-item">
                <a href="#">Features</a>
              </li>
              <li className="navbar-item">
                <a href="#">Product</a>
              </li>
              <li className="navbar-item">
                <a href="#">Reviews</a>
              </li>
              <li className="navbar-item">
                <a href="#">Faq</a>
              </li>
              <li className="navbar-item">
                <a href="#">Contact</a>
              </li>
            </ul>
            <button className="btn-primary">
              <BsCart4 />
              Buy Now
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
}
