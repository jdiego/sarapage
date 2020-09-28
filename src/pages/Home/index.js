import React from "react";
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

// import sections
import Topbar from '../../components/Topbar';
import Hero from '../../components/Hero';
import About from '../../components/About';

function Home() {
  return (

    <BootstrapProvider>

      <Topbar/>
      <Hero/>
      <About/>

    </BootstrapProvider>
  );
}

   
export default Home;