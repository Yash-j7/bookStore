import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import Books from "./Books";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Books />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
