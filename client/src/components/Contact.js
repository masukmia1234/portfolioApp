import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container App">
          <div className="row animated fadeIn">
            <div className="col-md-12 animated fadeInUp">
              <form
                method="POST"
                action="https://www.mechanized-aesthetics.net/TEST/portfolioTest/EmailRelay.php"
              >
                <div className="form-group block">
                  <ul>
                    <li>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                      />
                    </li>
                    <li>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Phone"
                      />
                    </li>
                    <li>
                      <textarea
                        className="form-control"
                        row="10"
                        name="message"
                        placeholder="Message"
                      ></textarea>
                      <input type="text" className="hide" name="info" />
                    </li>
                    <button
                      type="submit"
                      className="btn btn-primary form-control"
                    >
                      Submit
                    </button>
                  </ul>
                </div>{" "}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
