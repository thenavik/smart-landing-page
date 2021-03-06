import React, { useState } from "react";
import { Link } from "react-scroll";
import { CgMenuRightAlt } from "react-icons/cg";
import "../styles/header/header.scss";

export default function XMenu(props) {
  const [menu, setMenu] = useState(false);

  const handleClickMenu = () => {
    enableScroll();
    setMenu(false);
  };

  const toggleMenu = () => {
    if (menu) {
      setMenu(false);
      enableScroll();
    } else {
      setMenu(true);
      disableScroll();
    }
  };

  const disableScroll = () => {
    document.body.classList.add("stop-scrolling");
  };

  const enableScroll = () => {
    document.body.classList.remove("stop-scrolling");
  };
  return (
    <div className="nav">
      <nav className="navbar">
        <img src={props.logo} alt="logo" />
        <ul className="navbar-list">
          {props?.menuData?.map((el) => {
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
        {props.btn}
        <div
          className={
            menu ? "mobile-menu__icon activeMenuIcon" : "mobile-menu__icon"
          }
          onClick={() => toggleMenu()}
        >
          <CgMenuRightAlt />
        </div>
      </nav>

      <div className={menu ? "mobile-navbar activeMenu" : "mobile-navbar"}>
        <ul className="mobile-navbar__list">
          {props?.menuData?.map((item) => {
            return (
              <li className="mobile-navbar__item" key={item.id}>
                <Link
                  activeClass="active"
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1000}
                  onClick={() => {
                    handleClickMenu(item.title);
                    enableScroll();
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
