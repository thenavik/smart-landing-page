import React from "react";
import "../../styles/faq/faq.scss";

export default function Faq() {
  return (
    <div className="faq-area" id="faq">
      <div className="xcontainer">
        <div className="faq-wrapper">
          <div class="faq-section-heading text-center">
            <h2 className="main-headline">Frequently Asked Questions</h2>
            <p className="main-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              rerum aut! Tempore maiores ipsum sequi porro ratione officia.
            </p>
          </div>
          <div className="faq-section-body">
            <div className="tablist-question">
              <div class="card">
                <div class="card-header active" role="tab" id="faq1">
                  <h5 class="mb-0">
                    <a
                      data-toggle="collapse"
                      href="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      How can I buy the watch?
                    </a>
                  </h5>
                </div>
                <div class="collapse show">
                  <div class="card-body">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                    nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                    pretium, ligula sollicitudin laoreet viverra, tortor libero
                    sodales leo, eget blandit nunc tortor eu nibh. Nullam
                    mollis. Ut justo. Suspendisse potenti.
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-img text-center animation-jump">
              <img
                src="https://themehoster.com/tf/html/tm/buten/demo/assets/images/watch-3.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
