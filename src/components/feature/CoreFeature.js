import React from "react";
import { FaUsers } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import { SiSpringsecurity } from "react-icons/si";
import { CgNotes } from "react-icons/cg";
import "../../styles/feature/corefeature.scss";
import Watch2 from "../../assets/img/watch-2.png";

export default function CoreFeature() {
  const coreData = [
    {
      id: 1,
      title: "User Friendly",
      icon: <FaUsers />,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia",
    },
    {
      id: 2,
      title: "Unlimited Features",
      icon: <CgNotes />,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia",
    },
    {
      id: 3,
      title: "High Security",
      icon: <SiSpringsecurity />,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia",
    },
    {
      id: 4,
      title: "Free Updates",
      icon: <HiOutlineRefresh />,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia",
    },
  ];

  return (
    <div className="core-feature-area" id="reviews">
      <div className="xcontainer">
        <div className="core-wrapper">
          <div className="core-section-heading">
            <h2 className="main-headline">
              Outstanding Core Features of The Product
            </h2>
            <p className="main-paragraph ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              rerum aut! Tempore maiores ipsum sequi porro ratione officia.
            </p>
          </div>

          <div className="core-section-body">
            <div className="core-content">
              {coreData?.map((el) => {
                return (
                  <div className="core-feat-single" key={el.id}>
                    <h4>
                      {el.icon} {el.title}
                    </h4>
                    <p>{el.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="core-img">
              <div data-aos="fade-up" data-aos-duration="3000">
                <div className="core-feat-img animation-jump">
                  <img src={Watch2} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
