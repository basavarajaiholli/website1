import vr from "../assets/vr.png";
import coad from "../assets/coad.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Code Your{" "}
        <span className="bg-gradient-to-r from-orange-700 to-red-700 text-transparent bg-clip-text">
          Path to Success
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veniam
        praesentium officia tempora quidem! Placeat, beatae. Illu
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex  mt-10 justify-center ">
        <img
          src={vr}
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-3 my-4"
        ></img>

        <img
          src={coad}
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-3 my-4"
        ></img>
      </div>
    </div>
  );
};
export default HeroSection;
