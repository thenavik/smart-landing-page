import React from "react";
import { BsCart4 } from "react-icons/bs";
import "../styles/core/xbutton.scss";

export default function XButton(props) {
  return (
    <>
      <button className={props.type}>
        <BsCart4 />
        {props.name}
      </button>
    </>
  );
}
