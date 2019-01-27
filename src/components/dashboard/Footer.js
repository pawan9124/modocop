import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col span-1-of-2">
            <ul className="footer-nav">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">iOS App</a>
              </li>
              <li>
                <a href="#">Android App</a>
              </li>
            </ul>
          </div>
          <div className="col span-1-of-2">
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest-square" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p>Copyright &copy; Modocop. All right reserved</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
