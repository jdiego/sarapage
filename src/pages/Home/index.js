import React from "react";

// import sections
import Topbar from '../../components/Topbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Intro from '../../components/Intro';
import Tarot from '../../components/Tarot';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';


function Home() {
  return (
      <section id="main">
        <Topbar />
        <Hero />
        <About />
        <Intro />
        <Tarot />
        <Testimonials />
        <Footer />
      </section>
  );
}

   
export default Home;