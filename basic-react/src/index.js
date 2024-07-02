import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.js";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    reactElement
    // <App/>
    
  
);
