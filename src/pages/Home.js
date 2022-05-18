import React from "react";
import About from "../components/about/About";
import Feature from "../components/feature/Feature";
import Header from "../components/about/Header";
import Video from "../components/video/Video";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Feature />
      <Video />
    </div>
  );
}
