import React, { useState } from "react";
import XButton from "../../core/XButton";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import "../../styles/header/header.scss";

export default function Header() {
  const [affix, setAffix] = useState(false);
  const menuData = [
    {
      id: 1,
      href: "hero",
      title: "Home",
    },
    {
      id: 2,
      href: "about",
      title: "About",
    },
    {
      id: 3,
      href: "features",
      title: "Features",
    },
    {
      id: 4,
      href: "product",
      title: "Product",
    },
    {
      id: 5,
      href: "reviews",
      title: "Reviews",
    },
    {
      id: 5,
      href: "faq",
      title: "Faq",
    },
    {
      id: 6,
      href: "contact",
      title: "Contact",
    },
  ];

  window.onscroll = function (e) {
    if (window.scrollY > 0) {
      setAffix(true);
    }
    if (affix === true) {
      if (window.scrollY === 0) {
        setAffix(false);
      }
    }
  };

  return (
    <div className="header-section" id="hero">
      <header className={affix ? "header affix" : "header"}>
        <div className="xcontainer">
          <nav className="navbar">
            <img src="https://themehoster.com/tf/html/tm/buten/demo/assets/images/logo.png" />
            <ul className="navbar-list">
              {menuData?.map((el) => {
                return (
                  <li className="navbar-item" key={el.id}>
                    <Link
                      activeClass="active"
                      to={el.href}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={1000}
                    >
                      {el.title}
                    </Link>
                  </li>
                );
              })}
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
