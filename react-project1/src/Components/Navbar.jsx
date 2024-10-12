import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about us" },
  { name: "Contact Us", href: "#contact us" },
  { name: "Courses", href: "#courses" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center ">
          <div className="flex items-center flex-shrink-0">
            <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Skillex</span>
          </div>
          <ul className=" hidden  mr-2 lg:flex ml-14  space-x-12 py-3 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-item-center">
            <a href="#" className="py-2 px-3 mx-2 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 justify-center items-center lg:hidden">
            {navItems.map((item, index) => {
              <li key={index} className="py-4">
                <a href={item.href}>{item.label}</a>
              </li>;
            })}
            <div className="flex space-x-6">
              <a
                href="# "
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800  hover:to-orange-900 transition-colors duration-300"
              >
                Sign In
              </a>
              <a
                href="#"
                className="text-white font-bold py-2 px-4 rounded bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-600 hover:to-orange-900 transition-colors duration-300"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
