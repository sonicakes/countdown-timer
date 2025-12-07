import Timer from "./components/Timer";
import stars from "./assets/images/bg-stars.svg"
import hills from "./assets/images/pattern-hills.svg"
import fb from "./assets/images/icon-facebook.svg"
import insta from "./assets/images/icon-instagram.svg"
import pint from "./assets/images/icon-pinterest.svg"

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen relative">
        <Timer />
        <img src={stars} className="absolute z-90 w-full h-full object-cover" />
        <img src={hills} className="absolute bottom-0 z-95 w-full"/>
        <div class="absolute z-10 inset-0 bg-purple-900/10"></div>
        <div className="absolute bottom-12 z-95 grid max-w-[300px] grid-cols-3 gap-4">
          <img src={fb}/>
          <img src={insta}/>
          <img src={pint}/>
        </div>
      </div>
    </>
  );
}

export default App;
