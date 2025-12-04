import Square from "./Square";
import { getTimeRemaining } from "../timer-logic/helper-funcs";
import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const timerRef = useRef(null);

  const futureTime = new Date("2026-02-09T12:15:00").getTime();
  // Note: This string format assumes the time is local (AEDT in your context).
  const currentTime = new Date().getTime();
  const diff = futureTime - currentTime;
  const timeUnits = getTimeRemaining(diff);

  const [time, setTime] = useState(timeUnits);


  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(timeUnits);
    }, 1000);
  }, [time]);


  return (
    <>
      {/* <div>
        today is {new Date().toLocaleDateString()}{" "}
        {new Date().toLocaleTimeString()}
      </div> */}
      <div> Time remaining to holidays is: </div>
      <div className="flex gap-2">
        {Object.keys(timeUnits).map((key) => (
          <Square key={key} label={key} value={timeUnits[key]} />
        ))}
      </div>
    </>
  );
};

export default Timer;
