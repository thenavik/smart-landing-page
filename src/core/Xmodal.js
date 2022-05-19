import React from "react";
import { BsCart4 } from "react-icons/bs";
import "../styles/core/xmodal.scss";

export default function Xmodal(props) {
  return (
    <div className={props.visible ? "xmodal hide" : "xmodal"}>
      <div className="xmodal__container">
        <div className="xmodal__wrapper">
          <div className="xmodal-head">
            <h2>Video in YouTube</h2>
            <div className="" onClick={props.hide()}>
              <BsCart4 />
            </div>
          </div>
          <div className="xmodal-body">
            <h1>fuck to</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
