import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import "../../styles/video/video.scss";

export default function Video() {
  return (
    <div className="video-area" id="product">
      <div className="video-overlay"></div>
      <div className="xcotainer">
        <div className="video-wrapper">
          <div className="video-content">
            <h2>Product Demo Video</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              rerum aut! Tempore maiores ipsum sequi porro ratione officia.
            </p>
            <div className="video-player">
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
  );
}
