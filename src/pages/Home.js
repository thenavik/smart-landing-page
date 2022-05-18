import React from "react";
import About from "../components/about/About";
import Feature from "../components/feature/Feature";
import Header from "../components/about/Header";
import Video from "../components/video/Video";
import CoreFeature from "../components/feature/CoreFeature";
import WhyChoose from "../components/whychoose/WhyChoose";
import Slider from "../components/slider/Slider";
import Newsletter from "../components/newsletter/Newsletter";
import Faq from "../components/faq/Faq";
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
      <Slider />
      <Faq />
    </div>
  );
}
