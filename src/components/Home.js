import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
  <div id="home">
    <div>
      <h1 style={{color: "firebrick"}}>
        "Your {name} is a Web Developer from Your {city}"
      </h1>
      home
    </div>
  </div>
);
}

export default Home;
