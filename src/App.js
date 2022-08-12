import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Treatments from "./components/Treatments";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <Banner />
      <Treatments />
      <Info />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
