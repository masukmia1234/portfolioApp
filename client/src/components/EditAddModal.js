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
import { updateItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class EditAddModal extends Component {
  state = {
    modal: true,
    name: "",
    category: "",
    thumb: "",
    details: "",
    img: "",
    youTube: "",
    software: "",
    details: "",
    gitHub: "",
    created: ""
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    this.props.getItems();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    let softwareArr = this.state.software;
    let software = softwareArr.split(" ");

    const edit = {
      id: this.props.id,
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
    this.props.updateItem(edit);
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
      <div>
        <Modal isOpen={this.state.modal} toggle={this.state.toggle}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            Modify
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
                  style={{ marginTop: "2rem" }}
                >
                  Edit Item
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

export default connect(mapStateToProps, { updateItem })(EditAddModal);
