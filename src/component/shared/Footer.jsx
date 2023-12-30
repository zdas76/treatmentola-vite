import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/treatmentolalogo.png";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="py-8 bg-primary">
      <div className="container mx-auto lg:px-16 px-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-5">
          <div className="py-4 text-white">
            <Link to="/" className="flex items-center justify-center md:justify-start">
              <img className="w-16 mr-2" src={logo} alt="TreatmentOla" />
              <h2 className="text-4xl font-bold text-white">TreatmentOla</h2>
            </Link>
            <p className="my-8 text-justify leading-8 md:text-xl">
              We work with a network of top-tier hospitals and clinics across Bangladesh, India, Thailand, and Singapore, offering various medical specialties, including
              Cardiology, Oncology, Gastroenterology, Orthopedics, Neurology, Infertility and more.
            </p>
          </div>
          <div className="py-8 px-10 hidden sm:block">
            <h1 className="font-bold text-white text-2xl md:text-3xl text-left mb-4">Active Links</h1>
            <ul className="list-none text-white flex gap-y-4 flex-col">
              <li className="flex items-center gap-x-2 font-semibold hover:translate-x-1 duration-200">
                <Link to="/" className="flex items-center gap-x-2">
                  <span className="p-0.5 border rounded-full bg-white text-black">
                    <MdOutlineKeyboardArrowRight className="" />
                  </span>
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-x-2 font-semibold hover:translate-x-1 duration-200">
                <Link to="blog" className="flex items-center gap-x-2">
                  <span className="p-0.5 border rounded-full bg-white text-black">
                    <MdOutlineKeyboardArrowRight className="" />
                  </span>
                  Blog
                </Link>
              </li>
              <li className="flex items-center gap-x-2 font-semibold hover:translate-x-1 duration-200">
                <Link to="gallery" className="flex items-center gap-x-2">
                  <span className="p-0.5 border rounded-full bg-white text-black ">
                    <MdOutlineKeyboardArrowRight className="" />
                  </span>
                  Gallery
                </Link>
              </li>
              <li className="flex items-center gap-x-2 font-semibold hover:translate-x-1 duration-200">
                <Link to="contact" className="flex items-center gap-x-2">
                  <span className="p-0.5 border rounded-full bg-white text-black">
                    <MdOutlineKeyboardArrowRight className="" />
                  </span>
                  Contact us
                </Link>
              </li>
              <li className="flex items-center gap-x-2 font-semibold hover:translate-x-1 duration-200">
                <Link to="about" className="flex items-center gap-x-2">
                  <span className="p-0.5 border rounded-full bg-white text-black">
                    <MdOutlineKeyboardArrowRight className="" />
                  </span>
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-8  hidden sm:block">
            <h1 className="font-bold text-white text-2xl md:text-3xl text-left mb-4">Follow us</h1>
            <ul className="list-none text-white">
              <li className="my-8 ">
                <a href="https://www.facebook.com/treatmentola" target="_blank" rel="noopener noreferrer" className="flex gap-x-2 items-center">
                  <span className="border p-1 rounded-full">
                    <FaFacebook className="" />
                  </span>
                  <span>Facebook</span>
                </a>
              </li>
              <li className="my-8 ">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex gap-x-2 items-center">
                  <span className="border p-1 rounded-full">
                    <FaLinkedinIn className="" />
                  </span>
                  <span>Linkedin</span>
                </a>
              </li>
              <li className="my-8 ">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex gap-x-2 items-center">
                  <span className="border p-1 rounded-full">
                    <FaTwitter className="" />
                  </span>
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="py-4 text-white flex justify-between flex-col sm:flex-row gap-y-4">
          <span className="text-lg">&#169; TreatmentOla Healthcare Ltd.</span>
          <ul className="list-none footer-menu flex gap-6">
            <li>
              <Link className="hover:text-red-400">Terms & Condition</Link>
            </li>
            <li>
              <Link className="hover:text-red-400">Privacy Policy</Link>
            </li>
            <li>
              <Link className="hover:text-red-400">Our Mission</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
