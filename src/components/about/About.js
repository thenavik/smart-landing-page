import React from "react";
import "../../styles/about/about.scss";

export default function About() {
  return (
    <div className="about-area">
      <div className="xcontainer">
        <div className="about-wrapper">
          <div className="about-content">
            <h4>About The Watch</h4>
            <h2>Best and Fashionable Smart Watch For Easy Life.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis.Praesent dapibus, neque id cursus faucibus, tortor neque
              egestas auguae, eu vulputate magna eros eu erat. Aliquam erat
              volutpat.
            </p>
            <ul>
              <li>
                <i className="icofont-check-circled"></i> Attractive Interface
                with Many Options
              </li>
              <li>
                <i className="icofont-check-circled"></i> Live Chat and Instant
                Notification
              </li>
              <li>
                <i className="icofont-check-circled"></i> Install App with
                Unlimited Features
              </li>
            </ul>
          </div>
          <div className="about-img">
            <img src="" className="img-fluid" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
