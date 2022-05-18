import React from "react";
import "../../styles/whychoose/whychoose.scss";
import { GiAlliedStar } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { RiDonutChartFill } from "react-icons/ri";

export default function WhyChoose() {
  const whyChooseArray = [
    {
      id: 1,
      icon: <GiAlliedStar />,
      title: "High Quality Product",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Innisi neque, aliquet vel, dapibus mattis nisi.",
    },
    {
      id: 2,
      icon: <RiDonutChartFill />,
      title: "Life Time Free Updates",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Innisi neque, aliquet vel, dapibus mattis nisi.",
    },
    {
      id: 3,
      icon: <BiSupport />,
      title: "24/7 Dedicated Support",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Innisi neque, aliquet vel, dapibus mattis nisi.",
    },
  ];

  return (
    <div className="why-choose-area">
      <div className="xcontainer">
        <div className="why-choose-headline">
          <div className="headline-content">
            <h2 className="main-headline">Why Choose The Product</h2>
            <p className="main-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              rerum aut! Tempore maiores ipsum sequi porro ratione officia.
            </p>
          </div>
        </div>
        <div className="why-choose-content row">
          <div className="col-lg-6">
            <div className="why-choose-img">
              <img
                className="animation-jump"
                src="https://themehoster.com/tf/html/tm/buten/demo/assets/images/watch-3.png"
              />
            </div>
          </div>
          <div className="col-lg-6">
            {whyChooseArray.map((el) => {
              return (
                <div key={el.id} className="why-choose-single">
                  <div className="icon">{el.icon}</div>
                  <div className="content">
                    <h4>{el.title}</h4>
                    <p>{el.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
