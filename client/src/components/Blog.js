import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      result: null,
      feed: "",
      value:
        "https://www.mechanized-aesthetics.net/TEST/portfolioTest/mechanized-aesthetics-news.php"
    };
    this.getRssFeed = this.getRssFeed.bind(this);
  }

  getRssFeed(whatFeed) {
    fetch(whatFeed)
      .then(res => res.text())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            feed: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  componentDidMount() {
    this.getRssFeed(this.state.value);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row animated fadeIn">
            <div className="col-md-12 animated fadeInUp">
              {this.state.feed ? (
                ReactHtmlParser(this.state.feed)
              ) : (
                <div className="loader center" />
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
