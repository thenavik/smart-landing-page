import React from "react";
import XButton from "../../core/XButton";
import "../../styles/product/productarea.scss";

export default function ProductArea() {
  const productArray = [
    {
      id: 1,
      title: "Casual",
      image:
        "https://themehoster.com/tf/html/tm/buten/demo/assets/images/watch-4.png",
      cost: "$199",
    },
    {
      id: 2,
      title: "Smart",
      image:
        "https://themehoster.com/tf/html/tm/buten/demo/assets/images/watch-5.png",
      cost: "$279",
    },
    {
      id: 3,
      title: "Glorius",
      image:
        "https://themehoster.com/tf/html/tm/buten/demo/assets/images/watch-5.png",
      cost: "$399",
    },
    {
      id: 4,
      title: "Extra",
      image:
        "https://themehoster.com/tf/html/tm/buten/demo/assets/images/watch-7.png",
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
              <div key={el.id} className="col-lg-3">
                <div className="product">
                  <h4>{el.title}</h4>
                  <img src={el.image} />
                  <h2>{el.cost}</h2>
                  <XButton type={"btn-blue"} name={"Buy Now"} />
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
