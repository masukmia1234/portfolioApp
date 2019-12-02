import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
    details: ""
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    let softwareArr = this.state.software;
    let software = softwareArr.split(" ");

    const newItem = {
      name: this.state.name,
      category: this.state.category,
      thumb: this.state.thumb,
      img: this.state.img,
      youTube: this.state.youTube,
      software: software,
      details: this.state.details,
      gitHub: this.state.gitHub,
      created: this.state.created
    };

    //add item via addItem action
    this.props.addItem(newItem);
    //close modal
    this.toggle();
  };

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );
    return (
      <div id="addItem">
        {this.props.isAuthenticated ? (
          <Button className="btn btn-success" onClick={this.toggle}>
            Add Item
          </Button>
        ) : null}
        <Modal isOpen={this.state.modal} toggle={this.state.toggle}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            Add to shopping list
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="name"
                  onChange={this.onChange}
                />

                <Input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="category"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="thumb"
                  id="thumb"
                  placeholder="thumb"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="img"
                  id="img"
                  placeholder="img"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="youTube"
                  id="youTube"
                  placeholder="youTube"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="software"
                  id="software"
                  placeholder="software"
                  onChange={this.onChange}
                />

                <textarea
                  className="form-control"
                  cols="5"
                  name="details"
                  id="details"
                  placeholder="Details"
                  onChange={this.onChange}
                ></textarea>

                <Input
                  type="text"
                  name="gitHub"
                  id="gitHub"
                  placeholder="gitHub"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="created"
                  id="created"
                  placeholder="created"
                  onChange={this.onChange}
                />

                <button
                  className="btn btn-danger btn-block"
                  style={{ marginTop: "3rem" }}
                >
                  Add Item
                </button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addItem })(ItemModal);
