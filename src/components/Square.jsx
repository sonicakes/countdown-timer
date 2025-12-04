import { useState, useEffect } from "react";

const Square = ({ value, label }) => {
  const [animate, setAnimate] = useState(false);
  const [prevVal, setPrevVal] = useState(value);

  useEffect(() => {
    if (value !== prevVal) {
      setAnimate(true);

      const timeoutId = setTimeout(() => {
        setAnimate(false);
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }

    // Always update the previous value for the next run
    setPrevVal(value);

    // Dependencies: 'value' (to detect change) and 'prevVal' (to compare against)
  }, [value, prevVal]);
  return (
    <div className="flex flex-col gap-2">
      <div className={`text-4xl ${animate ? "animated" : ""}`}>{value}</div>
      <div> {label} </div>
    </div>
  );
};

export default Square;
