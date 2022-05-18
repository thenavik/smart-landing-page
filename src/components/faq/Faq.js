import React, { useState } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import "../../styles/faq/faq.scss";

export default function Faq() {
  const [activeTab, setActiveTab] = useState();

  const questionData = [
    {
      id: 1,
      title: "How can I buy the watch?",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
    },
    {
      id: 2,
      title: "How can I order the watch?",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
    },
    {
      id: 3,
      title: "How much price of the watch?",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
    },
    {
      id: 4,
      title: "How can I get refund?",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.",
    },
  ];

  const toggleTab = (id) => {
    if (activeTab === id) {
      setActiveTab();
    } else {
      setActiveTab(id);
    }
  };

  return (
    <div className="faq-area" id="faq">
      <div className="xcontainer">
        <div className="faq-wrapper">
          <div className="faq-section-heading text-center">
            <h2 className="main-headline">Frequently Asked Questions</h2>
            <p className="main-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              rerum aut! Tempore maiores ipsum sequi porro ratione officia.
            </p>
          </div>
          <div className="faq-section-body">
            <div className="tablist-question">
              {questionData?.map((el) => {
                return (
                  <div
                    className="card"
                    key={el.id}
                    onClick={() => toggleTab(el.id)}
                  >
                    <div
                      className={
                        activeTab === el.id
                          ? "card-header active"
                          : "card-header"
                      }
                      role="tab"
                      id="faq1"
                    >
                      <h5>
                        <div className="card-title">{el.title}</div>
                        <div className="card-icon">
                          {activeTab === el.id ? (
                            <MdArrowDropUp />
                          ) : (
                            <MdArrowDropDown />
                          )}
                        </div>
                      </h5>
                    </div>
                    <div
                      className={
                        activeTab === el.id ? "collapse" : "collapse hide"
                      }
                    >
                      <div className="card-body">{el.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="faq-img animation-jump">
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
