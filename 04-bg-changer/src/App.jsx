import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [color, setColor] = useState();

  return (
    <>
      <div className="main-container" style={{ backgroundColor: color }}>
        <div className="container">
          <button
            className="btn"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button className="btn" style={{ backgroundColor: "yellow" }}
          onClick={() => {
            setColor("yellow");
          }}
          >
            Yellow
          </button>
          <button className="btn" style={{ backgroundColor: "blue" }}
          onClick={() => {
            setColor("blue");
          }}
          >
            Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
