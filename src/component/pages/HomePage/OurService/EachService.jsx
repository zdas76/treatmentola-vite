import React from "react";
import { } from "react-router-dom";

const EachService = ({ serviceName, serviceDescription, icon }) => {
  return (
    <div className="sm:p-4 p-2 flex flex-col items-center sm:hover:shadow hover:scale-110 duration-300 cursor-pointer w-4/5 sm:w-full mx-auto sm:my-0">
      <span className="border-2 rounded-full flex items-center justify-center border-primary mb-2 p-2">
        <img src={icon} alt={serviceName} className="h-12 w-12" />
      </span>
      <h4 className="font-bold text-[22px] capitalize">{serviceName}</h4>
      <small className="text-sm my-2 block sm:w-full mx-auto">{serviceDescription}</small>
    </div>
  );
};

export default EachService;
