import React from "react";
import data from "../../data.json";
import { AiFillStar } from "react-icons/ai";

const Header = () => (
  <div className="flex items-center md:py-1">
    <marquee
      className="cursor-pointer"
      // behavior="scroll"
      target="left"
      onMouseOver={(e) => e.target.stop()}
      onMouseOut={(e) => e.target.start()}
    >
      {data.breakingnews.map((breakingnews) => (
        <div
          className="font-bold inline pointer-events-none text-primary"
          key={breakingnews.id}
        >
          <AiFillStar className="inline mx-1 text-red_base md:text-xl" />{" "}
          {breakingnews.title}
        </div>
      ))}
    </marquee>
  </div>
);

export default Header;
