const Square = ({ value, label }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-7xl text-soft-red tracking-wide">
          <div className="relative shadow-lg shadow-bluish-black">
            <div className="bg-darker-desat h-[65px] w-[120px] rounded-tr-lg rounded-tl-lg cutout-top"></div>
            <div className="bg-dark-desat-blue h-[65px] w-[120px] rounded-bl-lg rounded-br-lg cutout-bottom"></div>
            <span className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {value}
            </span>
            <div className="h-px absolute w-[120px] bg-bluish-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"></div>

            <span className="w-[120px] absolute top-0 h-[65px] bg-darker-desat/10 z-60"></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="uppercase mt-5 text-body tracking-[5px] text-grayish-blue">
          {label}
        </div>
      </div>
    </div>
  );
};

export default Square;
