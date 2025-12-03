const Square = ({ value, label }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-4xl"> {value} </div>
      <div> {label} </div>
    </div>
  );
};

export default Square;
