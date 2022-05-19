import React, { useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { TRUE } from "sass";
import Xmodal from "../../core/Xmodal";
import "../../styles/video/video.scss";

export default function Video() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  const hide = () => {
    setModal(false);
  };

  return (
    <>
      <Xmodal visible={modal} hide={hide} />
      <div className="video-area" id="product">
        <div className="video-overlay"></div>
        <div className="xcontainer">
          <div className="video-wrapper">
            <div className="video-content">
              <h2>Product Demo Video</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
                rerum aut! Tempore maiores ipsum sequi porro ratione officia.
              </p>
              <div className="video-player" onClick={() => toggleModal()}>
                <div className="pulse1"></div>
                <div className="pulse2"></div>
                <div className="icon-play">
                  <AiOutlinePlayCircle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
