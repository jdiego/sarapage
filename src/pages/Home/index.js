import React from "react";

// import sections
import Topbar from '../../components/Topbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Intro from '../../components/Intro';
import Tarot from '../../components/Tarot';
import Testimonials from '../../components/Testimonials';
import Products from '../../components/Products';
import Social from '../../components/Social';
import Contact from '../../components/Contact';
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
        <Products />
        <Social />
        <Contact/>
        <Footer />
      </section>
  );
}

   
export default Home;