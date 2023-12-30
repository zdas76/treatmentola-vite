import React, { useState } from "react";
import "./department.css";
const FlipPart = ({ dep_details, department_name, icon }) => {
  const [isflip, setIsflip] = useState(false);
  return (
    <div className="cursor-grab" onMouseEnter={() => setIsflip(true)} onMouseLeave={() => setIsflip(false)}>
      <div className={`p-2 flip-box shadow-xl bg-white duration-300 h-full ${isflip ? "department-card" : null} select-none pointer-events-none`}>
        {isflip ? (
          <div className="flip-back flex justify-center items-center h-full">
            <p className="text-xl sm:font-semibold">{dep_details}</p>
          </div>
        ) : (
          <div className="box-front cursor-pointer flex justify-center items-center flex-col py-12">
            <img src={icon} alt={department_name} className="h-14 w-14" />
            <h2 className="font-semibold text-xl mt-3">{department_name}</h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default FlipPart;
