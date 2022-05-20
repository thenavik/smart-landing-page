import React from "react";
import XButton from "../../core/XButton";
import "../../styles/product/productarea.scss";
import Watch4 from "../../assets/img/watch-4.png";
import Watch5 from "../../assets/img/watch-5.png";
import Watch6 from "../../assets/img/watch-6.png";
import Watch7 from "../../assets/img/watch-7.png";
import { BsCart4 } from "react-icons/bs";

export default function ProductArea() {
  const productArray = [
    {
      id: 1,
      title: "Casual",
      image: Watch4,
      cost: "$199",
    },
    {
      id: 2,
      title: "Smart",
      image: Watch5,
      cost: "$279",
    },
    {
      id: 3,
      title: "Glorius",
      image: Watch6,
      cost: "$399",
    },
    {
      id: 4,
      title: "Extra",
      image: Watch7,
      cost: "$220",
    },
  ];
  return (
    <div className="product-area">
      <div className="xcontainer">
        <div className="row">
          <div className="section-heading">
            <h2 className="main-headline">
              Our Awesome Products. Choose Best One
            </h2>
            <p className="main-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              rerum aut! Tempore maiores ipsum sequi porro ratione officia.
            </p>
          </div>
        </div>
        <div className="row">
          {/* start single product */}
          {productArray.map((el) => {
            return (
              <div key={el.id} className="col-lg-3 product-wrap">
                <div className="product">
                  <h4>{el.title}</h4>
                  <img src={el.image} />
                  <h2>{el.cost}</h2>
                  <XButton
                    icon={<BsCart4 />}
                    type={"btn-blue"}
                    name={"Buy Now"}
                  />
                </div>
              </div>
            );
          })}
          {/* end single product */}
        </div>
      </div>
    </div>
  );
}
