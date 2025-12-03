import Square from "./Square";
import { getTimeRemaining } from "../timer-logic/helper-funcs";
const Timer = () => {

  const futureTime = new Date("2026-02-09T12:15:00").getTime();
  // Note: This string format assumes the time is local (AEDT in your context).
  const currentTime = new Date().getTime();
  const diff = futureTime - currentTime;
  const timeUnits = getTimeRemaining(diff);

  return (
    <>
      <div>
        today is {new Date().toLocaleDateString()}{" "}
        {new Date().toLocaleTimeString()}
      </div>
      <div>difference between now and holiday: {diff} milliseconds</div>
      <div> Time remaining in units is: </div>
      <div className="flex gap-2">
        {/* 1. Get an array of keys: ["name", "age", "city", "occupation"] */}
        {Object.keys(timeUnits).map((key) => (
          // 2. Use the key as the loop index and JSX key
          <Square key={key} label={key} value={timeUnits[key]} />
        ))}
      </div>
    </>
  );
};

export default Timer;
