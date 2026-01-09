import Timer from "./components/Timer";
import stars from "./assets/images/bg-stars.svg";
import hills from "./assets/images/pattern-hills.svg";
import fb from "./assets/images/icon-facebook.svg";
import insta from "./assets/images/icon-instagram.svg";
import pint from "./assets/images/icon-pinterest.svg";
import Selectors from "./components/Selectors";
const App = () => {
 
  return (
    <div className="flex flex-col items-center h-screen relative px-4 lg:px-auto">
      <Selectors />
      <Timer/>
      <img src={stars} className="absolute z-90 w-full h-full object-cover" />
      <img
        src={hills}
        className="absolute bottom-0 z-95 w-full max-h-[150px]"
      />
      <div className="absolute z-10 inset-0 bg-purple-900/10"></div>
      <div className="absolute bottom-12 z-95 grid max-w-[300px] grid-cols-3 gap-4">
        <img src={fb} />
        <img src={insta} />
        <img src={pint} />
      </div>
    </div>
  );
};

export default App;
