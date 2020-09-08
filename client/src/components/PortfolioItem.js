import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems, deleteItem, updateItem } from "../actions/itemActions";
import PropTypes from "prop-types";
import EditAddModal from "./EditAddModal";

class PortfolioItem extends Component {
  constructor() {
    super();
    this.state = {
      showAddEdit: false,
      modifyId: null
    };
  }
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  onModifyClick = id => {
    this.setState({
      showAddEdit: true,
      modifyId: id
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        showAddEdit: false
      });
    }
  }

  render() {
    let { items } = this.props.item;

    console.log("isAuthenticated: " + this.props.isAuthenticated);

    return (
      <div className="container App">
        <div className="row  animated fadeIn" id="items">
          {this.props.item
            ? items.map((item, i) => {
                if (item.category === this.props.portfolio) {
                  return (
                    <React.Fragment>
                      <div
                        className="col-md-6 imgFrame card   animated "
                        onClick={this.props.selectItem.bind(
                          this,
                          i,
                          this.props.isAuthenticated
                        )}
                        onMouseOver={this.props.teaserRollover.bind(this, i)}
                        onMouseOut={this.props.teaserRollout.bind(this, i)}
                      >
                        <div className="row">
                          <div
                            className="col-md-6 thumbNail animated "
                            data-item={i}
                          >
                            <div className="imgIcon">
                              {item.youTube ? (
                                <i className="fas fa-play-circle"></i>
                              ) : (
                                <i className="fas fa-camera"></i>
                              )}
                              <img src={item.thumb} />
                            </div>
                          </div>

                          <div
                            className="col-md-6  teaserInfo  animated "
                            key={i}
                            data-item={i}
                          >
                            <div className="card-header" data-item={i}>
                              {`${item.name} - ${item.created}`}{" "}
                            </div>

                            <div class="card-body row">
                              <div className="col-md-12" data-item={i}>
                                <h1 className="displayMobile pb-2">
                                  {item.youTube ? (
                                    <i className="fas fa-play-circle"></i>
                                  ) : (
                                    <i className="fas fa-camera"></i>
                                  )}
                                </h1>
                                <ul>
                                  {item.software.length > 0
                                    ? item.software.map((app, j) => {
                                        return <li key={j}>{app}</li>;
                                      })
                                    : null}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {this.props.isAuthenticated ? (
                            <div className="col-md-12">
                              <button
                                className="btn btn-block btn-primary"
                                onClick={this.onModifyClick.bind(
                                  this,
                                  item._id
                                )}
                              >
                                Modify Item
                              </button>
                              <button
                                className="btn btn-block btn-primary"
                                onClick={this.onDeleteClick.bind(
                                  this,
                                  item._id
                                )}
                              >
                                Delete Item
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </React.Fragment>
                  );
                }
              })
            : null}
        </div>{" "}
        {this.state.showAddEdit !== false ? (
          <EditAddModal
            id={this.state.modifyId}
            getItems={this.props.getItems}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getItems, deleteItem })(
  PortfolioItem
);


