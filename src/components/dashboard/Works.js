import React, { Component } from "react";

class Works extends Component {
  render() {
    return (
      <section className="section-steps clearfix" id="work">
        <div className="row">
          <h2>How it works &mdash; Simple as 1, 2, 3</h2>
        </div>
        <div className="row">
          <div className="col span-1-of-2 step-box js--wp-2">
            <img
              src={require("../../img/app-iPhone.png")}
              alt="Omnifood app on iPhone"
              className="app-screen"
            />
          </div>
          <div className="col span-1-of-2 step-box ">
            <div className="work-steps">
              <div>1</div>
              <p>
                Choose the subscription plan that best fits your needs and sign
                up today.
              </p>
            </div>
            <div className="work-steps">
              <div>2</div>
              <p>
                Choose your model using our mobile app or website. Or you can
                even call us!
              </p>
            </div>
            <div className="work-steps">
              <div>3</div>
              <p>Signup and work with model. See you the next time!</p>
            </div>
            <a href="#a" className="btn-app">
              <img
                src={require("../..//img/download-app.svg")}
                alt="Download Iphone app"
              />
            </a>
            <a href="#s" className="btn-app">
              <img
                src={require("../..//img/download-app-android.png")}
                alt="Download Android app"
              />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Works;
