import React from "react";
import { FaUsers } from "react-icons/fa";
import "../../styles/feature/corefeature.scss";

export default function CoreFeature() {
  return (
    <div className="core-feature-area">
      <div className="xcontainer">
        <div className="core-wrapper">
          <div class="core-section-heading">
            <h2>Outstanding Core Features of The Product</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              rerum aut! Tempore maiores ipsum sequi porro ratione officia.
            </p>
          </div>
          <div className="core-section-body">
            <div className="core-content">
              <div class="core-feat-single">
                <h4>
                  <FaUsers /> User Friendly
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quae, rerum aut! Tempore maiores ipsum sequi porro ratione
                  officia.
                </p>
              </div>
              <div class="core-feat-single">
                <h4>
                  <FaUsers /> User Friendly
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quae, rerum aut! Tempore maiores ipsum sequi porro ratione
                  officia.
                </p>
              </div>
              <div class="core-feat-single">
                <h4>
                  <FaUsers /> User Friendly
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quae, rerum aut! Tempore maiores ipsum sequi porro ratione
                  officia.
                </p>
              </div>
              <div class="core-feat-single">
                <h4>
                  <FaUsers /> User Friendly
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quae, rerum aut! Tempore maiores ipsum sequi porro ratione
                  officia.
                </p>
              </div>
            </div>
            <div className="core-img">
              <div class="core-feat-img animation-jump">
                <img
                  src="https://themehoster.com/tf/html/tm/buten/demo/assets/images/watch-2.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
