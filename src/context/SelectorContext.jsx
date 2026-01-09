import { createContext, useContext, useState } from "react";

export const SelectorContext = createContext();

export function SelectorProvider({ children }) {
  const [countdownDate, setCountdownDate] = useState('');
  const [countdownTime, setCountdownTime] = useState('');
  const [label, setLabel] = useState('Your Label Here');

  const handleCountDate = (v) => setCountdownDate(v);
  const handleCountTime = (v) => setCountdownTime(v);
  const handleLabelUpdate = (v) => setLabel(v);

  return (
    <SelectorContext.Provider
      value={{ label, handleLabelUpdate, countdownDate, handleCountDate, countdownTime, handleCountTime }}
    >
      {children}
    </SelectorContext.Provider>
  );
}

export function useSelector() {
  return useContext(SelectorContext);
}
