import React, { useState } from "react";
import XButton from "../../core/XButton";
import { BsCart4 } from "react-icons/bs";
import XMenu from "../../core/XMenu";
import Watch1 from "../../assets/img/watch-1.png";
import "../../styles/header/header.scss";

export default function Header() {
  const [affix, setAffix] = useState(false);
  const [btnType, setBtnType] = useState("btn-primary");
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
      id: 6,
      href: "faq",
      title: "Faq",
    },
    {
      id: 7,
      href: "contact",
      title: "Contact",
    },
  ];

  window.onscroll = function (e) {
    if (window.scrollY > 0) {
      setAffix(true);
      setBtnType("btn-blue");
    }
    if (affix === true) {
      if (window.scrollY === 0) {
        setAffix(false);
        setBtnType("btn-primary");
      }
    }
  };

  return (
    <div className="header-section" id="hero">
      <header className={affix ? "header affix" : "header"}>
        <div className="xcontainer">
          <XMenu
            menuData={menuData}
            logo={
              "https://themehoster.com/tf/html/tm/buten/demo/assets/images/logo.png"
            }
            btn={<XButton type={btnType} icon={<BsCart4 />} name={"Buy Now"} />}
          />
        </div>
      </header>
      <section className="home-area">
        <div className="xcontainer">
          <div className="row">
            <div className="col-lg-6">
              <div className="home-content">
                <div className="content-center">
                  <h1>Best Landing Page For Online Product Marketing</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna nibh, viverra non.
                  </p>
                  <div className="mt-4">
                    <XButton
                      type={"btn-primary"}
                      icon={<BsCart4 />}
                      name={"Order Now"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-img">
                <img className="animation-jump" src={Watch1} alt="img fon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
