import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Card from "./components/Card.jsx";

let username = "avinash";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Card username={username} btnText = "click me"/>
    <Card username="newAvinash" />
    <App />
  </>
);
