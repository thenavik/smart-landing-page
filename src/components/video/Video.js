import React from "react";
import "../../styles/video/video.scss";

export default function Video() {
  return (
    <div className="video-area">
      <div className="video-overlay"></div>
      <div className="xcotainer">
        <div className="video-wrapper">
          <div class="video-content">
            <h2>Product Demo Video</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              rerum aut! Tempore maiores ipsum sequi porro ratione officia.
            </p>
            <div class="video-player">
              <div class="pulse1"></div>
              <div class="pulse2"></div>
              <a
                class="popup-video"
                href="https://www.youtube.com/watch?v=EOA1oXpLT0w"
              >
                <i class="icofont-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
