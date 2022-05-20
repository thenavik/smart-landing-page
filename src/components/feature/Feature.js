import React from "react";
import { FiLayers } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { TiFlowMerge } from "react-icons/ti";
import { BsFillChatLeftFill } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { RiCameraLensFill } from "react-icons/ri";
import XIcon from "../../core/XIcon";
import "../../styles/feature/feature.scss";

export default function Feature() {
  const featuresData = [
    {
      id: 2,
      title: "Attractive Interface",
      text: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.",
      icon: <FiLayers />,
    },
    {
      id: 3,
      title: "Notification Alert",
      text: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.",
      icon: <IoIosNotifications />,
    },
    {
      id: 4,
      title: "GPS Tracking",
      text: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.",
      icon: <TiFlowMerge />,
    },
    {
      id: 5,
      title: "User Live Chat",
      text: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.",
      icon: <BsFillChatLeftFill />,
    },
    {
      id: 6,
      title: "iOS and Android Apps",
      text: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.",
      icon: <DiAndroid />,
    },
    {
      id: 7,
      title: "Latest Technology",
      text: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.",
      icon: <RiCameraLensFill />,
    },
  ];

  return (
    <div className="feature-area" id="features">
      <div className="xcontainer">
        <div className="feature-wrapper">
          <div className="section-feature__heading">
            <h2 className="main-headline">
              Many Features are Available in The Watch
            </h2>
            <p className="main-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              rerum aut! Tempore maiores ipsum sequi porro ratione officia.
            </p>
          </div>
          <div className="section-feature__body">
            {featuresData?.map((el) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration={350 * el.id}
                  data-aos-anchor-placement="center-bottom"
                  key={el.id}
                >
                  <div className="feature-single">
                    <XIcon icon={el.icon} />
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
