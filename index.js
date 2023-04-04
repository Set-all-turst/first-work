import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar.js";
import Card from "./Card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar title="Hello" />
    <div className="cards">
      <Card
        title="Enjoy Beauty place in Bali City"
        country="Bali, indonesha"
        price={"1200"}
      />
      <Card
        title="Enjoy Beauty place in Rom City"
        country="Bali, indonesha"
        price={"1200"}
      />
      <Card
        title="Enjoy Beauty place in Bali City"
        country="Bali, indonesha"
        price={"1200"}
      />
      <Card
        title="Enjoy Beauty place in Bali City"
        country="Bali, indonesha"
        price={"1200"}
      />
      <Card
        title="Enjoy Beauty place in Bali City"
        country="Bali, indonesha"
        price={"1200"}
      />
      <Card
        title="Enjoy Beauty place in Bali City"
        country="Bali, indonesha"
        price={"1200"}
      />
    </div>
  </React.StrictMode>
);
