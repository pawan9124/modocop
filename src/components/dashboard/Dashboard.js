import React, { Component } from "react";
import Header from "./Header";
import Features from "./Features";
import Models from "./Models";
import Works from "./Works";
import Cities from "./Cities";
import Testimonial from "./Testimonial";
import Plan from "./Plan";
import Contact from "./Contact";
import Footer from "./Footer";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Features />
        <Models />
        <Works />
        <Cities />
        <Testimonial />
        <Plan />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
