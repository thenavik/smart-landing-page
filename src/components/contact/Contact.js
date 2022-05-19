import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import XButton from "../../core/XButton";
import "../../styles/contact/contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="xcontainer">
        <div className="contact-wrapper">
          <div className="contact-section__heading text-center">
            <h2 className="main-headline">
              Need Help? Don't Forget to Contact With Us
            </h2>
            <p className="main-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              rerum aut! Tempore maiores ipsum sequi porro ratione officia.
            </p>
          </div>
          <div className="contact-body">
            <div className="contact-info">
              <div className="contact-info-single">
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                <div className="content">
                  <p>
                    <p>+09 12345 67890</p>
                    <p> +02 12345 67890</p>
                  </p>
                </div>
              </div>
              <div className="contact-info-single">
                <div className="icon">
                  <MdAttachEmail />
                </div>
                <div className="content">
                  <p>
                    <p>support@email.com</p>
                    <p>info@email.com</p>
                  </p>
                </div>
              </div>
              <div className="contact-info-single">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="content">
                  <p>
                    <p>67/A Lake View</p>
                    <p>New York, USA</p>
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-box">
              <div className="contact-form">
                <form>
                  <div className="box-head">
                    <div className="form-group pr-2">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name*"
                        required="required"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email*"
                        required="required"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control textarea"
                      id="message"
                      name="message"
                      rows="10"
                      placeholder="Write Your Message*"
                      required="required"
                    ></textarea>
                  </div>
                  <XButton type="btn-blue" icon={<FiSend />} name="Send" />
                  <div className="messages"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
