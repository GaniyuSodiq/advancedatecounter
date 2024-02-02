import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [rangeValue, setRangeValue] = useState(1);
  const [countValue, setCountValue] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + countValue);
  const theDate = date.toDateString();

  function reset() {
    setCountValue(0);
    setRangeValue(1);
  }
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
      <p>
        <span>
          {countValue === 0
            ? "Today's date is "
            : countValue < 0
            ? countValue + " days ago was "
            : countValue + " days to today will be "}
        </span>
        {theDate}
      </p>
      {(countValue !== 0 || rangeValue !== 1) && (
        <div>
          <button onClick={reset}>RESET</button>
        </div>
      )}
    </div>
  );
}

export default App;
