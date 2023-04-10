import React, { Component } from "react";

class Task3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birinchiSon: null,
      ikkinchiSon: null,
      natija: "",
    };
  }
  render() {
    const birinchisonn = (e) => {
      this.setState((previous) => ({
        ...previous,
        birinchiSon: +e.target.value,
      }));
    };

    const ikkinchisonn = (e) => {
      this.setState((previous) => ({
        ...previous,
        ikkinchiSon: +e.target.value,
      }));
    };

    const arifmetik = (a, b) => {
      this.setState((previous) => ({ ...previous, natija: (a + b) / 2 }));
    };
    return (
      <div className="dollar_style">
        <span>Son - 1</span>
        <input
          type="number"
          placeholder="Sonni kiriting"
          onChange={birinchisonn}
        />
        <span>Son - 2</span>
        <input
          type="number"
          placeholder="Sonni kiriting"
          onChange={ikkinchisonn}
        />
        <button
          onClick={() =>
            arifmetik(this.state.birinchiSon, this.state.ikkinchiSon)
          }
        >
          Hisoblash
        </button>
        <p>
          Sonlarning o'rta arifmetigi <b>{this.state.natija}</b> bo'ladi
        </p>
      </div>
    );
  }
}
export default Task3;
