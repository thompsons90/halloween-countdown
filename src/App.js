import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Tammy } from "./events/Tammy";
import { Halloween } from "./events/Halloween";
import Jack from "./utils/halloweenIcon.png";

function App() {
  return (
    <div className="App">
      <div>
        <Halloween />
      </div>
      <div>
        <Tammy />
      </div>

    </div>
  );
}

export default App;
