import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [rangeValue, setRangeValue] = useState(1);
  const [countValue, setCountValue] = useState(0);
  return (
    <div className="App">
      <div>
        <input
          type="range"
          max={10}
          min={1}
          onChange={(e) => setRangeValue(Number(e.target.value))}
          value={rangeValue}
        />{" "}
        {rangeValue}
      </div>
      <div>
        <button onClick={() => setCountValue(countValue - rangeValue)}>
          -
        </button>
        <input
          type="text"
          value={countValue}
          onChange={(e) => setCountValue(Number(e.target.value))}
        />
        <button onClick={() => setCountValue(countValue + rangeValue)}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
