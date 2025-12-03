import { useState } from "react";
import Timer from "./components/Timer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Countdown timer</h1>
      <Timer />
    </>
  );
}

export default App;
