import React, { useEffect } from "react";
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
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Header />
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-anchor-placement="center-bottom"
      >
        <About />
      </div>
      <Feature />
      <Video />
      <CoreFeature />
      <WhyChoose />
      <Newsletter />
      {/* <ProductArea /> */}
      <Slider />
      <Faq />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
