// import BotMessageSquare,
//   BatteryCharging,
//  Fingerprint,
// ShieldHalf,
//  PlugZap,
//  GlobeLock,
"lucide-react";

const homeSection = [
  {
    // icon: <BotMessageSquare />,
    text: " Welcoming and Inviting ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptate animi officiis distinctio, veniam sunt fugit quam temporibus fuga dolorem!.",
  },
  {
    // icon: <Fingerprint />,
    text: " Inspiring Success ",
    description:
      " Lorem ipsum dolo repellendus. Doloremque est amet sint at possimus, in perferendis suscipit eaque nihil. ",
  },
  {
    //  icon: <ChartSpline />
    text: " Building Bright Futures Together  ",
    description:
      "m ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptate animi officiis distinctio, veniam sunt fugit quam temporibusm ipsum dolor sit, amet consectetur adipisicing elit. Earum vol ",
  },
  {
    // icon: <BatteryCharging />,
    text: " Your Future, Our Focus ",
    description:
      "m ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptate animi officiis distinctio, veniam sunt fugit quam temporibus ",
  },
  {
    // icon: <PlugZap />,
    text: "Unlock Your True Potential ",
    description:
      "Wm ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptate animi officiis distinctio, veniam sunt fugit quam temporibus ",
  },
  {
    // icon: <GlobeLock />,
    text: "   Motivational and Empowering",
    description:
      "Gm ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptate animi officiis distinctio, veniam sunt fugit quam temporibus ",
  },
];

const HomeSection = () => {
  return (
    <div className="relative mt-20 border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          home
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Your Path to
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ">
            {""} <br />
            Success Starts Here
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {homeSection.map((home, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="">{home.icon}</div>
            <div>
              <h5 className="mt-1 mb-6 text-xl">{home.text}</h5>
              <p className="text-md p-3 mb-20 text-neutral-500">
                {home.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
