import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";
import Footer from "./components/header_footer/Footer";
import About from "./components/About/About";

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar />
          <About />
          <TourList >
          <Footer />
      </React.Fragment>
    );
  }
}

export default App;
