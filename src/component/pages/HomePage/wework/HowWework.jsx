import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlineDollar } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { TbPlaneInflight } from "react-icons/tb";
import ContactNowBtn from "../../../ContactNowBtn";
// import ReactPlayer from "react-player/lazy";
import ReactPlayer from "react-player";

const HowWework = () => {
  return (
    <div className="py-8">
      <div className="bg-blue-50 py-2">
        <div className="video-section max-w-[900px] mb-8 py-5 mx-auto">
          <ReactPlayer url="https://www.youtube.com/watch?v=eXjYU1EDdhE" width="100%" height="450px" muted={true} playing={true} controls={true} />
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-primary capitalize">How We Work</h1>

        <p className="capitalize md:text-4xl text-2xl leading-7 md:font-semibold md:text-center capitalize my-4">under one roof: Plan, travel, treatment</p>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-x-2 gap-y-7 mt-10">
          <div className="flex flex-col items-center md:text-2xl md:leading-7 p-2">
            <span className="text-4xl md:text-7xl mb-2 block text-primary">
              <CgFileDocument />
            </span>
            <p className="capitalize md:px-4">Send Your Report & Preferences</p>
          </div>
          <div className="flex flex-col items-center md:text-2xl md:leading-7 p-2">
            <span className="text-4xl md:text-7xl mb-2 block text-primary">
              <AiOutlineDollar />
            </span>
            <p className="capitalize md:px-4">Cost Estimate in 48 Hours</p>
          </div>
          <div className="flex flex-col items-center md:text-2xl md:leading-7 p-2">
            <span className="text-4xl md:text-7xl mb-2 block text-primary">
              <FaRegHandshake />
            </span>
            <p className="capitalize md:px-4">Get Received by Our Team</p>
          </div>
          <div className="flex flex-col items-center md:text-2xl md:leading-7 p-2">
            <span className="text-4xl md:text-7xl mb-2 block text-primary">
              <TbPlaneInflight />
            </span>
            <p className="capitalize md:px-4">Get Treated and Fly Back</p>
          </div>
        </div>
        <ContactNowBtn />
      </div>
    </div>
  );
};

export default HowWework;
