import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { CountComponent, CountComponentMemo } from "./CountComponent";

function App() {
  const [count, setCount] = useState(0);
  const [cubed, setCubed] = useState(0);
  const [cubed2, setCubed2] = useState(0)

  // increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // reset cubed2
  const reset = () => {
    setCubed2(0)
  }

  // everytime the value of count changes this is ran
  useEffect(() => {
    // cube the count value
    setCubed(count * count * count);
    setCubed2(count * count * count)
  }, [count]);

  // square a number passed to the method
  const calcSquared = useCallback((number) => {
    return number * number
  }, [])

  return (
    <>
      <div>
        <h2 className="text-4xl font-bold p-4">Count</h2>
        <CountComponent count={count} cubed={cubed} />

        <h2 className="text-4xl font-bold p-4">Count Memo</h2>
        <CountComponentMemo count={count} cubed={cubed} calcSquared={calcSquared} />

        <p className="p-4">Cubed2: {cubed2}</p>

        <div className="flex flex-row">
          <button onClick={increment} className="m-4">
            Increment Count
          </button>
          <button onClick={reset} className="m-4">Reset Cubed 2</button>
        </div>
      </div>
    </>
  );
}

export default App;
