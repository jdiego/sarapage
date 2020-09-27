import React, { Component } from "react";
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
// import sections
import Topbar from '../../components/Topbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
class Home extends Component {
    render() {
      return (
        <BootstrapProvider>
          <Topbar></Topbar>
          <Hero></Hero>
          <About></About>
        </BootstrapProvider>
      );
    }
  }
   
export default Home;