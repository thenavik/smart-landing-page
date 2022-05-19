import React from "react";
import { AiFillStar } from "react-icons/ai";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../styles/slider/slider.scss";
import client1 from "../../assets/img/client-1.jpg";
import client2 from "../../assets/img/client-2.jpg";

// import required modules
import { Pagination } from "swiper";

export default function Slider() {
  const userData = [
    {
      id: 1,
      name: "Jovid Smith",
      marker: "Marketer",
      commet:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quas maxime vel alias minima possimus corrupti est voluptatum, iusto excepturi, veniam similique et. Officia fugit voluptatibus.",
      avatar: client1,
      star: 3,
    },
    {
      id: 2,
      name: "David D",
      marker: "Marketer",
      commet:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quas maxime vel alias minima possimus corrupti est voluptatum, iusto excepturi, veniam similique et. Officia fugit voluptatibus.",
      avatar: client2,
      star: 6,
    },
    {
      id: 3,
      name: "Frank Frudo",
      marker: "Marketer",
      commet:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quas maxime vel alias minima possimus corrupti est voluptatum, iusto excepturi, veniam similique et. Officia fugit voluptatibus.",
      avatar: client1,
      star: 4,
    },
  ];

  const startData = (star) => {
    const arr = [];
    for (let index = 0; index < star; index++) {
      arr.push(<AiFillStar />);
    }
    return arr;
  };

  return (
    <div className="slider-area">
      <div className="xcontainer">
        <div className="slider-wrapper">
          <div className="slider-section__heading">
            <h2 className="main-headline c-white">Customer Reviews</h2>
            <p className="main-paragraph c-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              rerum aut! Tempore maiores ipsum sequi porro ratione officia.
            </p>
          </div>
          <div className="slider-section__body">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {userData?.map((el) => {
                return (
                  <SwiperSlide key={el.id}>
                    <div className="testimonial-single text-center">
                      <div className="client-info">
                        <img
                          src={el.avatar}
                          className="user-avatar"
                          alt="avatar"
                        />
                        <h4>{el.name}</h4>
                        <p>{el.marker}</p>
                      </div>
                      <div className="client-comment">
                        <p>{el.commet}</p>
                        <p className="icon-star">{startData(el.star)}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
