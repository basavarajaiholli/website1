import coad from "../assets/coad.png";
import { CheckCircle2 } from "lucide-react";

const checklistItems = [
  {
    title: " The Path to Programming Excellence",
    description:
      "We are dedicated to helping students achieve their academic goals.",
  },
  {
    title: " Where Coders Become Creators ",
    description: "We ensure a smooth code review process with reliable tools.",
  },
  {
    title: " Your Coding Journey Starts Here ",
    description:
      "Leverage AI tools to boost productivity and reduce coding time.",
  },
  {
    title: "Empowering You to Build, Innovate, and Succeed  ",
    description: "Collaborate efficiently and share your work in no time.",
  },
];

const AboutUs = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        About Our
        <span className="bg-gradient-to-r from-orange-500 to bg-orange-800 text-transparent bg-clip-text">
          <br />
          Coaching Center
        </span>
      </h2>

      {/* Main wrapper */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-12 mt-12">
        {/* Image on the left */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img src={coad} alt="Code" className="w-full h-auto" />
        </div>

        {/* Checklist items on the right */}
        <div className="w-full lg:w-1/2">
          <div className=" ">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="flex items-center justify-center bg-neutral-900 text-green-500 h-10 w-10 p-2 rounded-full">
                  <CheckCircle2 />
                </div>
                <div className="ml-4">
                  <h5 className="mt-1 mb-2 text-xl font-semibold">
                    {item.title}
                  </h5>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
