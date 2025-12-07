import Square from "./Square";
import { getTimeRemaining } from "../timer-logic/helper-funcs";
import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const timerRef = useRef(null);
  
  const futureTime = new Date("2026-02-09T12:15:00").getTime(); 

  const calculateTime = () => {
    const currentTime = new Date().getTime();
    const diff = futureTime - currentTime;
    
    // Stop the timer if time runs out
    if (diff < 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      return getTimeRemaining(0); 
    }
    
    return getTimeRemaining(diff);
  };

  const [time, setTime] = useState(calculateTime());


  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-[600px] z-100 relative">
      <h1 className="text-xl text-white uppercase font-bold tracking-[6px] text-center mb-10">Holidays are coming in</h1>
      <div className="grid gap-2 grid-cols-4">
        {Object.keys(time).map((key) => (
          <Square key={key} label={key} value={time[key]} />
        ))}
      </div>
    </div>
  );
};

export default Timer;