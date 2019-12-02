import React, { Component } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

import { connect } from "react-redux";
import { getItems, deleteItem, updateItem } from "../actions/itemActions";
import PropTypes from "prop-types";
import { LOGIN_FAIL } from "../actions/types";

class Modal extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
  }
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;

    let software = [];

    if (items) {
      software = items;
    } else {
      console.log("did not fire");
    }

    return (
      <React.Fragment>
        {this.props.selectInfo !== null ? (
          <React.Fragment>
            <div className="modal animated bounceIn block bd-example-modal-lg">
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      {items[this.props.selectInfo].name}
                    </h5>
                    <button
                      type="button"
                      className="close"
                      onClick={this.props.selectItem.bind(this, null)}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body center">
                    {items[this.props.selectInfo].youTube ? (
                      <iframe
                        className="modalMedia"
                        src={
                          "https://www.youtube.com/embed/" +
                          items[this.props.selectInfo].youTube
                        }
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <img
                        src={items[this.props.selectInfo].img}
                        alt={items[this.props.selectInfo].details}
                        id="modalImg"
                      />
                    )}

                    <ul>
                      <li>Created: {items[this.props.selectInfo].created}</li>

                      <li>
                        {ReactHtmlParser(items[this.props.selectInfo].details)}
                      </li>
                      <li>
                        Software:{" "}
                        {items[this.props.selectInfo]
                          ? items[this.props.selectInfo].software.map(
                              (app, i) => {
                                return (
                                  <span key={i}>
                                    {i !== 0 ? ", " : ""}
                                    {app}
                                  </span>
                                );
                              }
                            )
                          : null}
                      </li>
                      {items[this.props.selectInfo].gitHub ? (
                        <li>
                          <i class="fab fa-github"></i>{" "}
                          <a
                            href={items[this.props.selectInfo].gitHub}
                            target="_blank"
                          >
                            {items[this.props.selectInfo].title} GitHub Link
                          </a>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-light"
                      data-dismiss="modal"
                      onClick={this.props.selectItem.bind(this, null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal-backdrop fade show"
              onClick={this.props.selectItem.bind(this, null)}
            ></div>{" "}
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getItems, deleteItem })(Modal);

/*

    title: "Downtown Dallas",
    category: "marketing",
    thumb: "https://mechanized-aesthetics.net/MA-2015/img/work/marketing8.jpg",
    img: "https://mechanized-aesthetics.net/MA-2015/img/work/marketing8.jpg",
    youTube: "",
    software: ["Illustrator"],
    details: "Personal Project",
    gitHub: "",
    created: "2005"

    */
