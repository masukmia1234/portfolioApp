import React, { Component, Fragment } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class AppNavbar extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column flex-md-row align-items-center fixed-top  bg-white border-bottom shadow-sm animated fadeInDown"
        id="navWrap"
      >
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <Link
            to="/"
            className="navbar-brand"
            data-portfolio="landingPg"
            onClick={this.props.changePg.bind(
              this,

              "landingPg"
            )}
          >
            <img
              data-tada="logo"
              onMouseOver={this.props.tadaRollover.bind(this, "logo")}
              onMouseOut={this.props.tadaRollout.bind(this, "logo")}
              src="https://web-presence.biz/img/MA_Logo.png"
              className="img-fluid animated"
            />
          </Link>
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link
            className={this.props.portfolio === "applications" ? "active" : ""}
            to="/portfolio"
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
            className={this.props.portfolio === "marketing" ? "active" : ""}
            data-portfolio="marketing"
            onClick={this.props.changePg.bind(this, "marketing")}
          >
            Marketing
          </Link>

          <Link
            to="/blog"
            className={this.props.portfolio === "blog" ? "active" : ""}
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
            className={this.props.portfolio === "contact" ? "active" : ""}
            data-portfolio="contact"
            onClick={this.props.changePg.bind(
              this,

              "contact"
            )}
          >
            Contact
          </Link>
        </nav>
      </div>
    );
  }
}

export default AppNavbar;
