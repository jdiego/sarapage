import React, { Component } from "react";
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
// import sections
import Hero from '../../components/Hero';
class Home extends Component {
    render() {
      return (
        <BootstrapProvider>
          <Hero></Hero>
        </BootstrapProvider>
      );
    }
  }
   
export default Home;