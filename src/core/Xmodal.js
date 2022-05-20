import React from "react";
import { MdOutlineClose } from "react-icons/md";
import "../styles/core/xmodal.scss";

export default function Xmodal({ visible, hide, modalBody }) {
  console.log("visible", visible);
  return (
    <div className={visible === false ? "xmodal hide" : "xmodal"}>
      <div className="xmodal__container">
        <div className="xmodal__wrapper">
          <div className="xmodal-head">
            <h2>Video in YouTube</h2>
            <MdOutlineClose onClick={() => hide()} />
          </div>
          <div className="xmodal-body">{modalBody}</div>
        </div>
      </div>
    </div>
  );
}
