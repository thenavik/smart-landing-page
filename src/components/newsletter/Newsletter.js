import React from "react";
import "../../styles/newsletter/newsletter.scss";

export default function Newsletter() {
  return (
    <div className="newsletter-area">
      <div className="newsletter-overlay"></div>
      <div className="xcontainer">
        <div className="newsletter-box">
          <div className="row">
            <div className="col-lg-6">
              <h2>Subscribe Our Newsletter</h2>
              <p className="main-paragraph">
                We will send you latest update of the product.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="newsletter-form">
                <form>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
