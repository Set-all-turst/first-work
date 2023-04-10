import React, { Component } from "react";
import "./task.css";
class Task2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      kiritilganYil: null,
    };
  }
  render() {
    const kiritish = (e) => {
      this.setState((previous) => ({
        ...previous,
        kiritilganYil: +e.target.value,
      }));
    };
    console.log(this.state);

    const hisoblash = (value) => {
      this.setState((previous) => ({
        ...previous,
        year: +new Date().getFullYear() - value,
      }));
    };
    return (
      <div className="dollar_style">
        <h1>Yilni hisoblash</h1>
        <input
          type="number"
          placeholder="Yoshingizni kiriting"
          onChange={kiritish}
        />
        <button onClick={() => hisoblash(this.state.kiritilganYil)}>
          Hisoblash
        </button>
        <p>
          Sizning tug'ilgan yilingiz <b>{this.state.year}</b>
        </p>
      </div>
    );
  }
}
export default Task2;
