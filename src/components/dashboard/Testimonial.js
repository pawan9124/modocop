import React, { Component } from "react";

class Testimonial extends Component {
  render() {
    return (
      <section className="section-testimonials bg-color">
        <div className="row">
          <h2>Our customers can't live without us</h2>
        </div>
        <div className="row">
          <div className="col span-1-of-3">
            <blockquote>
              Truly one of my favorite agencies, Models and Images in Wichita
              Ks. Alleigh your talent is so great and your agency is so
              professional. It’s such a pleasure to come there!
              <cite>
                <img
                  src={require("../../img/customer-1.jpg")}
                  alt="Alberto Duncan"
                />
                Alberto Duncan{" "}
              </cite>
            </blockquote>
          </div>
          <div className="col span-1-of-3">
            <blockquote>
              One of the best decisions I made as a teen was signing up for
              professional modeling classes at Models & Images. M&I helped me
              gain confidence, poise, and style--skills that continue to benefit
              me through the years.
              <cite>
                <img
                  src={require("../../img/customer-2.jpg")}
                  alt="Joana Silva"
                />
                Joana Silva{" "}
              </cite>
            </blockquote>
          </div>
          <div className="col span-1-of-3">
            <blockquote>
              I LOVE working with MODOCOP! They are very organized and
              professional. They respond quickly to any emails you send them.
              The pay is great, and best part of all... you receive your check
              within a week or so, unlike many other companies.
              <cite>
                <img
                  src={require("../../img/customer-3.jpg")}
                  alt="Milton Chapman"
                />
                Milton Chapman{" "}
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
