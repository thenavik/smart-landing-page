import React from "react";
import { MdOutlineClose } from "react-icons/md";
import "../styles/core/xmodal.scss";

export default function Xmodal({ title, visible, hide, modalBody }) {
  return (
    <div className={visible === false ? "xmodal hide" : "xmodal"}>
      <div className="xmodal__container">
        <div className="xmodal__wrapper">
          <div className="xmodal-head">
            <h2>{title}</h2>
            <MdOutlineClose onClick={() => hide()} />
          </div>
          <div className="xmodal-body">{modalBody}</div>
        </div>
      </div>
    </div>
  );
}
