import React from "react";
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

// import sections
import Topbar from '../../components/Topbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Intro from '../../components/Intro';
import Tarot from '../../components/Tarot';
import Footer from '../../components/Footer';
function Home() {
  return (

    <BootstrapProvider>

      <Topbar/>
      <Hero/>
      <About/>
      <Intro/>
      <Tarot/>
      <Footer/>
    </BootstrapProvider>
  );
}

   
export default Home;