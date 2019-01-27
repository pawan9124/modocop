import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="row ">
            <img
              src={require("../../img/logo-white.svg")}
              alt="Omnifood logo"
              className="logo"
            />
            <img
              src={require("../../img/logo.svg")}
              alt="Omnifood logo"
              className="logo-black"
            />
            <ul className="main-nav js--main-nav ">
              <li>
                <a href="#feature">Home</a>
              </li>
              <li>
                <a href="#models">Models</a>
              </li>
              <li>
                <a href="#plan">Plans</a>
              </li>
              <li>
                <a href="#contact-form">Contact</a>
              </li>
            </ul>
            <a href="#" className="mobile-nav-icon js--nav-icon">
              <i className="fas fa-bars" />
            </a>
          </div>
        </nav>
        <div className="hero-text-box">
          <h1>
            Get Professional.
            <br /> Be Professional.
          </h1>
          <a href="#" className="btn btn-full js--scroll-to-plans">
            SignUp
          </a>
          <a href="#" className="btn btn-ghost js--scroll-to-feature">
            Show me more
          </a>
        </div>
      </header>
    );
  }
}

export default Dashboard;
