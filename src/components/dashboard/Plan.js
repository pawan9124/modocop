import React, { Component } from "react";

class Plan extends Component {
  render() {
    return (
      <section className="section-plans js--section-plans" id="plan">
        <div className="row">
          <h2>Grow Your Business With Our Plans</h2>
        </div>
        <div className="row">
          <div className="col span-1-of-3">
            <div className="plan-box js--wp-4">
              <div>
                <h3>Premium</h3>
                <p className="plan-price">
                  $999 <span>/ month</span>
                </p>
                <p className="plan-price-meal">For Players</p>
              </div>
              <div>
                <ul>
                  <li>
                    <i className="fas fa-check small-icon" />2 model every week
                  </li>
                  <li>
                    <i className="fas fa-check small-icon" />
                    Support 24/7
                  </li>
                  <li>
                    <i className="fas fa-check small-icon" />
                    Access to our inventory
                  </li>
                  <li>
                    <i className="fas fa-check small-icon" />
                    Free setup
                  </li>
                </ul>
              </div>
              <div>
                <a href="#" className="btn btn-full">
                  SignUp Now
                </a>
              </div>
            </div>
          </div>
          <div className="col span-1-of-3">
            <div className="plan-box">
              <div>
                <h3>Pro</h3>
                <p className="plan-price">
                  $749 <span>/ month</span>
                </p>
                <p className="plan-price-meal">For Professionals</p>
              </div>
              <div>
                <ul>
                  <li>
                    <i className="fas fa-check small-icon" />1 model every week
                  </li>
                  <li>
                    <i className="fas fa-check small-icon" />
                    Support 24/7
                  </li>
                  <li>
                    <i className="fas fa-check small-icon" />
                    Access to our inventory
                  </li>
                  <li>
                    <i className="fas fa-check small-icon" />
                    Free setup
                  </li>
                </ul>
              </div>
              <div>
                <a href="#" className="btn btn-ghost">
                  SignUp Now
                </a>
              </div>
            </div>
          </div>
          <div className="col span-1-of-3">
            <div className="plan-box">
              <div>
                <h3>Starter</h3>
                <p className="plan-price">
                  $599 <span> per model</span>
                </p>
                <p className="plan-price-meal">Start Up</p>
              </div>
              <div>
                <ul>
                  <li>
                    <i className="fas fa-check small-icon" />1 model only
                  </li>
                  <li>
                    <i className="fas fa-check small-icon" />
                    Support 24/7
                  </li>
                  <li>
                    <i className="fas fa-times small-icon" />
                    Access to our inventory
                  </li>
                  <li>
                    <i className="fas fa-check small-icon" />
                    Free setup
                  </li>
                </ul>
              </div>
              <div>
                <a href="#" className="btn btn-ghost">
                  SignUp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Plan;
