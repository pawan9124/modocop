import React, { Component } from "react";

class Contact extends Component {
  changeSelected() {}
  handleCheckbox() {}
  render() {
    return (
      <section className="section-form" id="contact-form">
        <div className="row">
          <h2>We're happy to hear from you</h2>
        </div>
        <div className="row">
          <form method="post" action="#" className="contact-form">
            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="name">Name</label>
              </div>
              <div className="col span-2-of-3">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="email">Email</label>
              </div>
              <div className="col span-2-of-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="find-us">How did you find us?</label>
              </div>
              <div className="col span-2-of-3">
                <select
                  name="find-us"
                  id="find-us"
                  value="Search Engine"
                  onChange={this.changeSelected.bind(this)}
                >
                  <option value="Friends">Friends</option>
                  <option value="Search Engine">Search Engine</option>
                  <option value="Ad">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label>Newsletter</label>
              </div>
              <div className="col span-2-of-3">
                <input
                  type="checkbox"
                  name="news"
                  id="news"
                  checked
                  onChange={this.handleCheckbox.bind(this)}
                />{" "}
                Yes, Please.
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label>Drop us a line</label>
              </div>
              <div className="col span-2-of-3">
                <textarea name="drops" placeholder="Your Message" />
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label>&nbsp;</label>
              </div>
              <div className="col span-2-of-3">
                <input type="submit" value="Send It" />
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
