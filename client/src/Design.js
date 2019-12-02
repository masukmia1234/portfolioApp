import React, { Component } from "react";

class Design extends Component {
  constructor() {
    super();
    this.state = {
      design: "option-one"
    };

    this.updateDesign = this.updateDesign.bind(this);
  }

  componentDidMount() {
    let design = localStorage.getItem("design");
    if (!design) {
      design = "option-1";
    }
    document.querySelector("body").setAttribute("data-design", design);
    document
      .querySelector("input[value='" + design + "']")
      .setAttribute("checked", true);
  }

  updateDesign() {
    let design = document.querySelector("input[name='theme']:checked").value;
    localStorage.setItem("design", design);
    document.querySelector("body").setAttribute("data-design", design);
  }

  render() {
    const designOptions = ["option-1", "option-2", "option-3", "option-4"];

    return (
      <div className="form-group" id="designOptions">
        <div id="designPanel-1">
          <ul>
            {designOptions
              ? designOptions.map(option => {
                  return (
                    <li>
                      <label class="radioContainer">
                        <input
                          type="radio"
                          name="theme"
                          value={option}
                          onChange={this.updateDesign}
                        />
                        <span class="checkmark"></span>
                      </label>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
        <div id="designPanel-2">
          <label>Theme Options: </label>
        </div>
      </div>
    );
  }
}

export default Design;
