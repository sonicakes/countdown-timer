import { useSelector } from "../context/SelectorContext";

const Selectors = () => {
  const {
    label,
    handleLabelUpdate,
    countdownDate,
    handleCountDate,
    countdownTime,
    handleCountTime,
  } = useSelector();
  const handleCta = (v) => {
    if (v === "zero") {
      handleLabelUpdate("your label here");
      handleCountDate("");
      handleCountTime("");
    } else {
      handleLabelUpdate(v.innerText);
      handleCountDate("2026-02-09");
      handleCountTime("12:15");
    }
  };
  return (
    <div className="flex gap-2 mb-5 flex-col z-100 pt-10">
      <h3 className="text-xl pb-2 text-gray-300">
        Fill in your values or click on pre-selected options
      </h3>
      <div className="flex gap-2"> <button
        className="border bg-dark-desat-blue text-gray-300 hover:text-gray-200 hover:border-soft-red cursor-pointer transition  border-transparent text-xs rounded-lg inline-block px-4 py-2"
        onClick={(e) => handleCta(e.target)}
      >
        Feb '26 Holiday Countdown
      </button>
      <button
        className="border bg-dark-desat-blue text-gray-300 hover:text-gray-200 hover:border-soft-red cursor-pointer transition  border-transparent text-xs rounded-lg inline-block px-4 py-2"
        onClick={(e) => handleCta("zero")}
      >
        Reset Timer to 0
      </button></div>
     
      <div className="flex gap-2 pt-5 flex-wrap">
        <input
          type="text"
          value={label}
          onChange={(e) => handleLabelUpdate(e.target.value)}
          className="border-grayish-blue bg-very-dark-blue/70 z-100 border p-2 text-gray-300 rounded-lg min-w-sm"
          placeholder="countdown label"
        />

        <input
          className="border-grayish-blue z-100 bg-very-dark-blue/70 border p-2 text-gray-300 rounded-lg"
          type="date"
          value={countdownDate}
          onChange={(e) => handleCountDate(e.target.value)}
        />
        <input
          className="border-grayish-blue z-100 bg-very-dark-blue/70 border p-2 text-gray-300 rounded-lg"
          type="time"
          value={countdownTime}
          onChange={(e) => handleCountTime(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Selectors;
