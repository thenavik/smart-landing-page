import React from "react";
import "../styles/core/xbutton.scss";

export default function XButton(props) {
  return (
    <>
      <button className={props.type}>
        {props?.icon}
        {props?.name}
      </button>
    </>
  );
}
