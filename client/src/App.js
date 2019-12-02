import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import PortfolioItem from "./components/PortfolioItem";
import { Provider } from "react-redux";
import store from "./store";
import ItemModal from "./components/ItemModal";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { Container } from "reactstrap";
import { loadUser } from "./actions/authActions";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";
import Title from "./components/Title";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Design from "./Design";

class App extends Component {
  constructor() {
    super();
    this.state = {
      //items: items,
      selectInfo: null,
      portfolio: "landingPg",
      design: ""
    };
    this.teaserRollover = this.teaserRollover.bind(this);
    this.teaserRollout = this.teaserRollout.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.changePg = this.changePg.bind(this);
    this.tadaRollover = this.tadaRollover.bind(this);
    this.tadaRollout = this.tadaRollout.bind(this);
  }

  componentDidMount() {
    store.dispatch(loadUser());
    let portfolio = sessionStorage.getItem("lastPg");
    if (portfolio) {
      this.setState({
        portfolio
      });
    }
  }

  teaserRollover(whichItem) {
    let teaserInfo = document.querySelector(
      ".teaserInfo[data-item='" + whichItem + "']"
    );
    let teaserImg = document.querySelector(
      ".teaserImg[data-item='" + whichItem + "']"
    );
    let header = document.querySelector(
      ".card-header[data-item='" + whichItem + "']"
    );

    header.classList.add("fadeDark");
    //teaserInfo.classList.add("bounceOut");
    //teaserImg.classList.add("bounceIn");
  }

  teaserRollout(whichItem) {
    /*let teaserInfo = document.querySelector(
      ".teaserInfo[data-item='" + whichItem + "']"
    );
    let teaserImg = document.querySelector(
      ".teaserImg[data-item='" + whichItem + "']"
    );*/

    let header = document.querySelector(
      ".card-header[data-item='" + whichItem + "']"
    );

    header.classList.remove("fadeDark");
    //teaserInfo.classList.remove("bounceOut");
    // teaserImg.classList.remove("bounceIn");
  }

  selectItem(whichItem, isAuthenticated) {
    if (whichItem !== null && isAuthenticated === false) {
      // let selectInfo = this.state.items[whichItem];

      this.setState({
        selectInfo: whichItem
      });
    } else {
      this.setState({
        selectInfo: null
      });
    }
  }

  changePg(portfolio) {
    this.setState({
      portfolio
    });

    document
      .querySelectorAll(
        "[data-portfolio='applications'], [data-portfolio='marketing'], [data-portfolio='blog'], [data-portfolio='contact']"
      )
      .forEach(el => el.classList.remove("active"));

    document
      .querySelector("[data-portfolio='" + portfolio + "']")
      .classList.add("active");

    sessionStorage.setItem("lastPg", portfolio);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  tadaRollover(element) {
    document
      .querySelector("[data-tada='" + element + "']")
      .classList.add("tada");
  }
  tadaRollout(element) {
    document
      .querySelector("[data-tada='" + element + "']")
      .classList.remove("tada");
  }

  render() {
    console.log("this.state.portfolio: " + this.state.portfolio);
    return (
      <Provider store={store}>
        <Router className="App">
          <Design />
          {this.state.portfolio !== "landingPg" ? (
            <AppNavbar
              changePg={this.changePg}
              portfolio={this.state.portfolio}
              tadaRollover={this.tadaRollover}
              tadaRollout={this.tadaRollout}
            />
          ) : null}
          <ItemModal />
          <React.Fragment>
            <Switch>
              <Route exact path="/">
                <LandingPage
                  changePg={this.changePg}
                  tadaRollover={this.tadaRollover}
                  tadaRollout={this.tadaRollout}
                />
              </Route>
              <Route exact path="/portfolio">
                <Title
                  portfolio={this.state.portfolio}
                  changePg={this.changePg}
                />
                <PortfolioItem
                  teaserRollover={this.teaserRollover}
                  teaserRollout={this.teaserRollout}
                  selectItem={this.selectItem}
                  portfolio={this.state.portfolio}
                  changePg={this.changePg}
                  showNav={true}
                />
              </Route>

              <Route exact path="/blog">
                <Title
                  portfolio={this.state.portfolio}
                  changePg={this.changePg}
                />
                <Blog changePg={this.changePg} />
              </Route>

              <Route exact path="/contact">
                <Title
                  portfolio={this.state.portfolio}
                  changePg={this.changePg}
                />
                <Contact changePg={this.changePg} />
              </Route>
            </Switch>
          </React.Fragment>
          {this.state.portfolio !== "landingPg" ? (
            <Footer
              tadaRollover={this.tadaRollover}
              tadaRollout={this.tadaRollout}
            />
          ) : null}

          <Modal
            selectItem={this.selectItem}
            selectInfo={this.state.selectInfo}
          />
        </Router>
      </Provider>
    );
  }
}

export default App;
