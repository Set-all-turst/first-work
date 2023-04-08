import React, { Component } from "react";
import "./Regstration.css";

class Reg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  }
  render() {
    const firstName = (e) => {
      this.setState((prev) => ({
        ...prev,
        firstname: e.target.value,
      }));
    };
    const onChangePass = (e) => {
      this.setState((prev) => ({ ...prev, password: e.target.value }));
    };
    return (
      <div className="cardstyle">
        <h1>Sign Up</h1>
        <div className="input-style">
          <label>First name</label>
          <input type="text" placeholder="First name" onChange={firstName} />

          <label>Last name</label>
          <input type="text" placeholder="Last name" />

          <label>Email adress</label>
          <input type="email" placeholder="Email adress" />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={onChangePass}
          />
          <button>Sign Up</button>
        </div>

        <p>
          Already registered? <a href="#">Sign in?</a>
        </p>
        <p>{this.state.firstname}</p>
      </div>
    );
  }
}

export default Reg;
