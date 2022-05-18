import React from "react";
import About from "../components/about/About";
import Feature from "../components/feature/Feature";
import Header from "../components/about/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Feature />
    </div>
  );
}
