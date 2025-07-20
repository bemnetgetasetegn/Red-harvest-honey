import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur z-50 shadow">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div>
          <span className="text-xl font-bold">Red Harvest Honey</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <li>
              <a href="#home" className="hover:text-amber-600 cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="hover:text-amber-600 cursor-pointer"
              >
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-600 cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="#testi" className="hover:text-amber-600 cursor-pointer">
                Testimonial
              </a>
            </li>
          </ul>

          <button className="btn btn-primary ml-4">Order Now</button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 max-h-screen"
            : "opacity-0 max-h-0 overflow-hidden"
        } bg-creamy pb-4 px-4`}
      >
        <ul className="flex flex-col gap-3">
          <li>
            <a
              href="#home"
              className="hover:bg-amber-50 py-2 px-4 rounded block"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:bg-amber-50 py-2 px-4 rounded block"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:bg-amber-50 py-2 px-4 rounded block"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="hover:bg-amber-50 py-2 px-4 rounded block"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testi"
              className="hover:bg-amber-50 py-2 px-4 rounded block"
              onClick={() => setIsOpen(false)}
            >
              Testimonial
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
