import {memo, useState, useEffect } from "react"

export const CountComponent = ({ count, cubed }) => {
  return (
    <>
      <p>Count: {count}</p>
      <p>Cubed: {cubed}</p>
    </>
  );
};

// memoized count component (only rerenders if props have changed)
export const CountComponentMemo = memo(function CountComponentMemo({count, cubed, calcSquared}) {
  const [squared, setSquared] = useState(0);

  useEffect(() => {
    setSquared(calcSquared(count));
  }, [calcSquared, count])
    
  return (
    <>
      <p>Count: {count}</p>
      <p>Squared: {squared}</p>
      <p>Cubed: {cubed}</p>
    </>
  );
});

CountComponent.propTypes = {
  count: Number,
  cubed: Number,
};

CountComponentMemo.propTypes = {
  count: Number,
  cubed: Number,
  calcSquared: () => Number
};