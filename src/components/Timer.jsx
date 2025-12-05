import Square from "./Square";
import { getTimeRemaining } from "../timer-logic/helper-funcs";
import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const timerRef = useRef(null);

  const futureTime = new Date("2026-02-09T12:15:00").getTime();
  // assumes the time is local (AEDT)
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
    <div className="max-w-[600px]">
      {/* 
      TODO - make today clock in the upper corner
      <div>
        today is {new Date().toLocaleDateString()}{" "}
        {new Date().toLocaleTimeString()}
      </div> */}
      <h1 className="text-xl text-white uppercase font-bold tracking-[6px] text-center mb-10">Holidays are coming in</h1>
      <div className="grid gap-2 grid-cols-4">
        {Object.keys(timeUnits).map((key) => (
          <Square key={key} label={key} value={timeUnits[key]} />
        ))}
      </div>
    </div>
  );
};

export default Timer;
