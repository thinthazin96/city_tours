import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";
import Landing from "./components/Landing/Landing";
import Footer from "./components/header_footer/Footer";
import About from "./components/About/About";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Element } from 'react-scroll';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Navbar />}>
            <Route path="Landing" element={<Landing />} />
            <Route path="About" element={<About />} />
            <Route path="TourList" element={<TourList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
