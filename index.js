import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Task from "./task";
import Task2 from "./task2.js";
import Task3 from "./task3";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Task />
    <Task2 />
    <Task3 />
  </React.StrictMode>
);
