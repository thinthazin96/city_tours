import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";
import About from "./components/About/About";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
        <About />
      </React.Fragment>
    );
  }
}

export default App;
