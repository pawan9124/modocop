import React, { Component } from "react";

class Features extends Component {
  render() {
    return (
      <section className="section-features js--section-features" id="feature">
        <div className="row">
          <h2>About Us</h2>
          <p className="long-copy">
            Hello, we’re Modocop, your new premium model angency service. We
            know you’re always busy to grow business. So we take the time for
            searching models perfect for your business. So let us take care of
            that, we’re really good at it, we promise!
          </p>
        </div>
        <div className="row js--wp-1">
          <div className="col span-1-of-4 box ">
            <i className="big-icon fas fa-infinity" />
            <h3>Up to 10 models/month</h3>
            <p>
              Never hassle again! We really mean that. Our subscription plans
              include up to 10 models/month coverage. You can also choose to
              order more flexibly if that's your style.
            </p>
          </div>
          <div className="col span-1-of-4 box ">
            <i className="big-icon fas fa-user-graduate" />
            <h3>Professionally Trained</h3>
            <p>
              Your time is valuable and not be part of dealing to setup the
              models for their role. We professionally train them for the
              challenges.
            </p>
          </div>
          <div className="col span-1-of-4 box ">
            <i className="big-icon fas fa-globe-americas" />
            <h3>Global Models</h3>
            <p>
              We believe in bringing the options of world together. So no need
              to waste time and money to search models in other countries as we
              have network all over the globe for your service.
            </p>
          </div>
          <div className="col span-1-of-4 box ">
            <i className="big-icon fas fa-headset" />
            <h3>Support</h3>
            <p>
              We don't limit your creativity, which means we can help with your
              professional setup as well. We have talented teams of
              photograhper, media editor and others who always ready to help .
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
