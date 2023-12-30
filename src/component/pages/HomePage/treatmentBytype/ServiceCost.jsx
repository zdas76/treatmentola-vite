import React from "react";

const ServiceCost = ({ treatmentname, countryName }) => {
  return (
    <div className="card border rounded-xl px-6 py-4 text-start hover:bg-primary duration-300 group w-full">
      <h3 className="text-indigo-700 mb-8 text-[20px] group-hover:text-white">Cost for {treatmentname} Surgery</h3>
      <small className="text-xl group-hover:text-white">Starting at</small>
      <b className="font-bold text-3xl my-3 group-hover:text-white">
        USD 3,000 for {treatmentname} in {countryName}
      </b>
    </div>
  );
};

export default ServiceCost;
