import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [rangeValue, setRangeValue] = useState(1);
  return (
    <div className="App">
      <input
        type="range"
        max={10}
        min={1}
        onChange={(e) => setRangeValue(e.target.value)}
        // value={rangeValue}
      />{" "}
      {rangeValue}
    </div>
  );
}

export default App;
