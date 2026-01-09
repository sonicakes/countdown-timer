import Square from "./Square";
import { getTimeRemaining } from "../timer-logic/helper-funcs";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "../context/SelectorContext";

const Timer = () => {
  const timerRef = useRef(null);
  const { countdownDate, countdownTime, label } = useSelector();
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
  if (!countdownDate || !countdownTime) {
    setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    if (timerRef.current) clearInterval(timerRef.current);
    return;
  }

    const input = `${countdownDate} ${countdownTime}`;
    const formatted = input.replace(" ", "T") + ":00";
    const futureTime = countdownTime && new Date(formatted).getTime();

    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const diff = futureTime - currentTime;

      if (diff <= 0) {
        clearInterval(timerRef.current);
        setTime(getTimeRemaining(0));
      } else {
        setTime(getTimeRemaining(diff));
      }
    };

    updateTimer();

    timerRef.current = setInterval(updateTimer, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [countdownDate, countdownTime]);

  return (
    <div className="max-w-[600px] z-100 relative pt-30">
      <h1 className="text-xl text-white uppercase font-bold tracking-[6px] text-center pb-10">
       { label }
      </h1>
      <div className="grid gap-2 grid-cols-4">
        {Object.keys(time).map((key) => (
          <Square key={key} label={key} value={time[key]} />
        ))}
      </div>
    </div>
  );
};

export default Timer;
