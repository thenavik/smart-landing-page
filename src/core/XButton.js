import React from "react";
import "../styles/xbutton.scss";

export default function XButton(props) {
  return (
    <>
      <a href="#" className="button">
        {props.icon}
        {props.name}
      </a>
    </>
  );
}
