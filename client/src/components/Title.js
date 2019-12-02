import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Title extends Component {
  constructor() {
    super();
    this.state = {
      design: "option-one"
    };
    this.titleAnimation = this.titleAnimation.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.portfolio !== prevProps.portfolio) {
      this.titleAnimation();
    }
  }

  titleAnimation() {
    document.querySelector("#theTitle").classList.add("bounceInLeft");
    setTimeout(function() {
      document.querySelector("#theTitle").classList.remove("bounceInLeft");
    }, 1000);
  }

  componentDidMount() {
    let design = localStorage.getItem("design");
    if (!design) {
      design = "option-one";
    }
    this.setState({
      design
    });
  }

  render() {
    return (
      <div className="container-fluid" data-title>
        <div className="row">
          <div className="col">
            <Link
              to="/"
              className="navbar-brand d-sm-block d-md-none"
              data-portfolio="landingPg"
              onClick={this.props.changePg.bind(
                this,

                "landingPg"
              )}
            >
              <img
                src="https://web-presence.biz/img/MA_Logo.png"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="col">
            <h1 className="text-center animated " id="theTitle">
              {this.props.portfolio}{" "}
            </h1>
          </div>
          <div className="col"> </div>
        </div>
      </div>
    );
  }
}

export default Title;
