import React from "react";
import XButton from "../../core/XButton";
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
            <XButton name={"Buy Now"} />
          </nav>
        </div>
      </header>
      <section className="home-area">
        <div className="xcontainer">
          <div className="row">
            <div className="col-lg-6">
              <div className="home-content">
                <h1>Best Landing Page For Online Product Marketing</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non.
                </p>
                <div className="mt-4">
                  <XButton name={"Order Now"} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-img">
                <img src="https://themehoster.com/tf/html/tm/buten/demo/assets/images/watch-1.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
