import React, { Component } from "react";

class Cities extends Component {
  render() {
    return (
      <section id="cities">
        <div className="row">
          <h2>We're currently in these cities</h2>
        </div>
        <div className="row js--wp-3">
          <div className="col span-1-of-4 box">
            <img
              className="meal_location_photo"
              src={require("../../img/lisbon-3.jpg")}
              alt="Lisbon"
            />
            <h3>Lisbon</h3>
            <ul className="meals-location">
              <li>
                <i className="fas fa-user small-icon" />
                1600+ happy customers
              </li>
              <li>
                <i className="fas fa-star small-icon" />
                60+ top models
              </li>
              <li>
                <i className="fab fa-twitter small-icon" />
                <a href="#">@modocop_lx</a>
              </li>
            </ul>
          </div>
          <div className="col span-1-of-4 box">
            <img
              className="meal_location_photo"
              src={require("../../img/san-francisco.jpg")}
              alt="san-francisco"
            />
            <h3>San Francisco</h3>
            <ul className="meals-location">
              <li>
                <i className="fas fa-user small-icon" />
                3700+ happy customers
              </li>
              <li>
                <i className="fas fa-star small-icon" />
                160+ top models
              </li>
              <li>
                <i className="fab fa-twitter small-icon" />
                <a href="#">@modocop_sf</a>
              </li>
            </ul>
          </div>
          <div className="col span-1-of-4 box">
            <img
              className="meal_location_photo"
              src={require("../../img/berlin.jpg")}
              alt="berlin"
            />
            <h3>Berlin</h3>
            <ul className="meals-location">
              <li>
                <i className="fas fa-user small-icon" />
                2300+ happy customers
              </li>
              <li>
                <i className="fas fa-star small-icon" />
                110+ top models
              </li>
              <li>
                <i className="fab fa-twitter small-icon" />
                <a href="#">@modocop_berlin</a>
              </li>
            </ul>
          </div>
          <div className="col span-1-of-4 box">
            <img
              className="meal_location_photo"
              src={require("../../img/london.jpg")}
              alt="London"
            />
            <h3>London</h3>
            <ul className="meals-location">
              <li>
                <i className="fas fa-user small-icon" />
                1200+ happy customers
              </li>
              <li>
                <i className="fas fa-star small-icon" />
                50+ top models
              </li>
              <li>
                <i className="fab fa-twitter small-icon" />
                <a href="#">@modocop_london</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Cities;
