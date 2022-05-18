import React from "react";
import About from "../components/about/About";
import Feature from "../components/feature/Feature";
import Header from "../components/about/Header";
import Video from "../components/video/Video";
import CoreFeature from "../components/feature/CoreFeature";
import WhyChoose from "../components/whychoose/WhyChoose";
import Newsletter from "../components/newsletter/Newsletter";
import ProductArea from "../components/product/ProductArea";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Feature />
      <Video />
      <CoreFeature />
      <WhyChoose />
      <Newsletter />
      <ProductArea />
    </div>
  );
}
