import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Nav } from "./nav";
import { Jumbo } from "./jumbo"
import { Card } from "./card"
import { Card2 } from "./card2"
import { Card3 } from "./card3"

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Jumbo />
        <div className="row">
          <Card />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
