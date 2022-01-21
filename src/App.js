import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";
import Footer from "./components/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
        <Footer/>
      </React.Fragment>
      
    );
  }
}

export default App;
