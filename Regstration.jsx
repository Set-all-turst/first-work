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
    const secondName = (e) => {
      this.setState((prev) => ({ ...prev, lastname: e.target.value }));
    };
    const email = (e) => {
      this.setState((prev) => ({ ...prev, email: e.target.value }));
    };
    return (
      <div className="cardstyle">
        <h1>Sign Up</h1>
        <div className="input-style">
          <label>First name</label>
          <input type="text" placeholder="First name" onChange={firstName} />

          <label>Last name</label>
          <input type="text" placeholder="Last name" onChange={secondName} />

          <label>Email adress</label>
          <input type="email" placeholder="Email adress" onChange={email} />

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
        <p>{this.state.lastname}</p>
        <p>{this.state.email}</p>
        <p>{this.state.password}</p>
      </div>
    );
  }
}

export default Reg;
