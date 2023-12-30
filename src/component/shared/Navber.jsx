import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navber.css";
import logo from "../../img/treatmentolalogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-primary relative">
      <div className="flex xl:flex justify-between items-center xl:px-20 md:px-10 px-3 max-w-[1285px] mx-auto">
        <div className="flex items-center text-white">
          <Link to="/">
            <img className="w-[40px] mr-2" src={logo} alt="TreatmentOla" />
          </Link>
        </div>
        <div onClick={() => setIsOpen((prev) => !prev)} className="xl:hidden cursor-pointer absolute right-5 text-2xl text-white font-bold">
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
        <ul
          className={`text-left p-1 gap-x-4 flex flex-col xl:flex-row absolute right-5 xl:static bg-primary xl:opacity-100 xl:flex mainmenu ${isOpen ? "top-full opacity-100" : "hidden"
            }`}
        >
          <li className="my-1 text-lg font-bold text-gray-300 px-2">
            <NavLink to="/" onClick={() => setIsOpen((prev) => !prev)}>
              Home
            </NavLink>
          </li>
          {/* <li className="my-1">
            <NavLink to="/consultation" className={({ isActive }) => (isActive ? "activeLink" : "link")} onClick={() => setIsOpen((prev) => !prev)}>
              Consultation
            </NavLink>
          </li>
          <li className="my-1">
            <NavLink to="/service" className={({ isActive }) => (isActive ? "activeLink" : "link")} onClick={() => setIsOpen((prev) => !prev)}>
              Service
            </NavLink>
          </li> */}
          <li className="font-bold my-1 text-lg text-gray-300 px-2">
            <a href="https://treatmentola.com/blog/" onClick={() => setIsOpen((prev) => !prev)}>
              Blog
            </a>
          </li>
          <li className="my-1 text-lg font-bold text-gray-300 px-2">
            <NavLink to="/gallery" onClick={() => setIsOpen((prev) => !prev)}>
              Gallery
            </NavLink>
          </li>
          <li className="my-1 text-lg font-bold text-gray-300 px-2">
            <NavLink to="/contact-us" onClick={() => setIsOpen((prev) => !prev)}>
              Contact Us
            </NavLink>
          </li>
          <li className="my-1 text-lg font-bold text-gray-300 px-2">
            <NavLink to="/about" onClick={() => setIsOpen((prev) => !prev)}>
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
