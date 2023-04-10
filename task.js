import React, { Component } from "react";
import "./task.css";
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dollarNarxi: 1500,
      number: null,
      yosh: null,
      year: "",
    };
  }
  render() {
    const onChange = (e) => {
      this.setState((previous) => ({ ...previous, number: +e.target.value }));
    };
    const Hisoblash = (value) => {
      this.setState((previous) => ({
        ...previous,
        counter: this.state.dollarNarxi * value,
      }));
    };

    return (
      <div>
        <div className="dollar_style">
          <h1>Dollar</h1>
          {
            <input
              type="number"
              placeholder="Kerakli dollar kiriting"
              onChange={onChange}
            />
          }
          <button onClick={() => Hisoblash(this.state.number)}>
            Hisoblash
          </button>
          <p>
            {this.state.number} dollar <b>{this.state.dollarNarxi}</b> so'm
            bo'ladi
          </p>
        </div>
      </div>
    );
  }
}

export default Task;
