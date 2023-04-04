import React, { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo_nav">LOGO</div>
        <div className="link_navv">
          <p>
            <a>Home</a>
          </p>
          <p>
            <a>Tours</a>
          </p>
          <p>
            <a>Hotel</a>
          </p>
          <p>
            <a>Gallery</a>
          </p>
          <p>
            <a>Pages</a>
          </p>
          <p>
            <a>Blog</a>
          </p>
          <p>
            <a>Content</a>
          </p>
          <p>
            <a>Login</a>
          </p>
          <button>Sign up</button>
        </div>
      </header>
    );
  }
}
export default Navbar;
