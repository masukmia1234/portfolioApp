import React, { Component } from "react";
//import MA_Logo from "./imgs/MA_Logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-auto text-center landingPgCol animated fadeIn">
            <ul>
              <li>
                <div>
                  <img
                    src="https://web-presence.biz/img/MA_Logo.png"
                    className="img-fluid"
                  />
                </div>
              </li>
              <li>
                <h2>
                  <a
                    href="http://mechanized-aesthetics.net/MA-2015/downloads/AaronSmithResume.pdf"
                    target="_blank"
                    onMouseOver={this.props.tadaRollover.bind(
                      this,
                      "fa-file-pdf"
                    )}
                    onMouseOut={this.props.tadaRollout.bind(
                      this,
                      "fa-file-pdf"
                    )}
                  >
                    Aaron Smith Resume{" "}
                    <i
                      class="fas fa-file-pdf animated"
                      data-tada="fa-file-pdf"
                    ></i>
                  </a>
                </h2>
              </li>
              <li>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Default button group"
                >
                  <Link
                    to="/portfolio"
                    className="p-2"
                    data-portfolio="applications"
                    onClick={this.props.changePg.bind(
                      this,

                      "applications"
                    )}
                  >
                    Applications
                  </Link>
                  <Link
                    to="/portfolio"
                    className="p-2"
                    data-portfolio="marketing"
                    onClick={this.props.changePg.bind(
                      this,

                      "marketing"
                    )}
                  >
                    Marketing
                  </Link>
                  <Link
                    to="/blog"
                    className="p-2"
                    data-portfolio="blog"
                    onClick={this.props.changePg.bind(
                      this,

                      "blog"
                    )}
                  >
                    Blog
                  </Link>
                  <Link
                    to="/contact"
                    className="p-2"
                    data-portfolio="contact"
                    onClick={this.props.changePg.bind(
                      this,

                      "contact"
                    )}
                  >
                    Contact
                  </Link>
                </div>
              </li>
              <li>
                {" "}
                <a
                  className="p-2"
                  href="mailto:admin@mechanized-aesthetics.net"
                  title="Email"
                >
                  <i
                    className="far fa-paper-plane animated"
                    data-tada="fa-paper-plane"
                    onMouseOver={this.props.tadaRollover.bind(
                      this,
                      "fa-paper-plane"
                    )}
                    onMouseOut={this.props.tadaRollout.bind(
                      this,
                      "fa-paper-plane"
                    )}
                  ></i>
                </a>
                <a
                  className="p-2"
                  href="https://www.linkedin.com/in/aaronrs2002"
                  target="_blank"
                  title="Linkedin"
                >
                  <i
                    className="fab fa-linkedin  animated"
                    data-tada="fa-linkedin"
                    onMouseOver={this.props.tadaRollover.bind(
                      this,
                      "fa-linkedin"
                    )}
                    onMouseOut={this.props.tadaRollout.bind(
                      this,
                      "fa-linkedin"
                    )}
                  ></i>
                </a>
                <a
                  className="p-2"
                  href="https://github.com/aaronrs2002"
                  target="_blank"
                  title="github"
                >
                  <i
                    class="fab fa-github  animated"
                    data-tada="fa-github"
                    onMouseOver={this.props.tadaRollover.bind(
                      this,
                      "fa-github"
                    )}
                    onMouseOut={this.props.tadaRollout.bind(this, "fa-github")}
                  ></i>
                </a>
                <a
                  className="p-2"
                  href="https://www.youtube.com/channel/UC_cqZ5WhobgOTFjRqcZKgKg"
                  target="_blank"
                  title="youTube"
                >
                  <i
                    className="fab fa-youtube  animated"
                    data-tada="fa-youtube"
                    onMouseOver={this.props.tadaRollover.bind(
                      this,
                      "fa-youtube"
                    )}
                    onMouseOut={this.props.tadaRollout.bind(this, "fa-youtube")}
                  ></i>
                </a>
                <a
                  className="p-2"
                  href="https://www.instagram.com/aaronrs2002/"
                  target="_blank"
                  title="instagram"
                >
                  <i
                    className="fab fa-instagram  animated"
                    data-tada="fa-instagram"
                    onMouseOver={this.props.tadaRollover.bind(
                      this,
                      "fa-instagram"
                    )}
                    onMouseOut={this.props.tadaRollout.bind(
                      this,
                      "fa-instagram"
                    )}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
