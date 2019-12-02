import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";

class Footer extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const date = new Date();
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <strong>{user ? `Welcome ${user.name}` : ""}</strong>

        <Logout />
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <RegisterModal />
        <LoginModal />
      </Fragment>
    );

    return (
      <footer className="footer mt-auto py-3 animated fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a
                className="p-2 "
                href="https://www.linkedin.com/in/aaronrs2002"
                target="_blank"
                title="linkedin"
              >
                <i
                  className="fab fa-linkedin animated"
                  data-tada="fa-linkedin"
                  onMouseOver={this.props.tadaRollover.bind(
                    this,
                    "fa-linkedin"
                  )}
                  onMouseOut={this.props.tadaRollout.bind(this, "fa-linkedin")}
                ></i>
              </a>
              <a
                className="p-2"
                href="https://github.com/aaronrs2002"
                target="_blank"
                title="github"
              >
                <i
                  className="fab fa-github animated"
                  data-tada="fa-github"
                  onMouseOver={this.props.tadaRollover.bind(this, "fa-github")}
                  onMouseOut={this.props.tadaRollout.bind(this, "fa-github")}
                ></i>
              </a>
              <a
                className="p-2"
                href="http://mechanized-aesthetics.net/MA-2015/downloads/AaronSmithResume.pdf"
                target="_blank"
                title="resume"
              >
                <i
                  className="fas fa-file-pdf animated"
                  data-tada="fa-file-pdf"
                  onMouseOver={this.props.tadaRollover.bind(
                    this,
                    "fa-file-pdf"
                  )}
                  onMouseOut={this.props.tadaRollout.bind(this, "fa-file-pdf")}
                ></i>
              </a>
              <a
                className="p-2 "
                href="https://www.youtube.com/channel/UC_cqZ5WhobgOTFjRqcZKgKg"
                target="_blank"
                title="youTube Channel"
              >
                <i
                  className="fab fa-youtube animated"
                  data-tada="fa-youtube"
                  onMouseOver={this.props.tadaRollover.bind(this, "fa-youtube")}
                  onMouseOut={this.props.tadaRollout.bind(this, "fa-youtube")}
                ></i>
              </a>
              <a
                className="p-2"
                href="https://www.instagram.com/aaronrs2002/"
                target="_blank"
                title="Instagram Account"
              >
                <i
                  className="fab fa-instagram animated"
                  data-tada="fa-instagram"
                  onMouseOver={this.props.tadaRollover.bind(
                    this,
                    "fa-instagram"
                  )}
                  onMouseOut={this.props.tadaRollout.bind(this, "fa-instagram")}
                ></i>
              </a>{" "}
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
            </div>
            <div className="col-md-6">
              <small> Copyright &copy; {date.getFullYear()}</small>
            </div>
            <div className="col-md-3 ml-auto userInfo">
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Footer);
