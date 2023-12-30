import React, { useState } from "react";
import ContactNowBtn from "../../../ContactNowBtn";
import ServiceCost from "./ServiceCost";

const Treatment = () => {
  const [treatmentname, setTreatmentname] = useState();
  const [countryName, setcountryName] = useState();
  return (
    <div className="">
      <div className="max-w-[1000px] mx-auto py-10">
        <div className="md:text-4xl flex justify-center gap-y-1 font-semibold items-center flex-wrap my-6 mb-8">
          <b className="text-2xl md:text-4xl font-semibold">Treatment Costs for</b>
          <div>
            <select
              className="border border-indigo-400 mx-2 rounded text-indigo-500 font-normal md:text-2xl outline-0"
              name="select"
              id=""
              onChange={(e) => setTreatmentname(e.target.value)}
            >
              <option className="text-blue-500" value="">
                Select Service
              </option>
              <option value="Oncology">Oncology</option>
              <option value="Gastrology">Gastrology</option>
              <option value="other">other</option>
            </select>
            in
            <select
              className="border border-indigo-400 mx-2 rounded text-indigo-500 font-normal md:text-2xl outline-0"
              name="select"
              id=""
              onChange={(e) => setcountryName(e.target.value)}
            >
              <option className="text-blue-500" value="Select treatment">
                Select Country
              </option>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="Nepal">Nepal</option>
            </select>
          </div>
        </div>
        <h2 className="text-2xl text-green-700 font-semibold mb-6 border-t border-dashed pt-4 border-green-400">
          Treatment primary cost for <span className="text-fuchsia-700">{treatmentname}</span> in <span className="text-fuchsia-700"> {countryName}</span>
        </h2>
        <div className="flex gap-x-2 justify-center ">
          <ServiceCost treatmentname={treatmentname} countryName={countryName} />
        </div>
        <ContactNowBtn />
      </div>
    </div>
  );
};

export default Treatment;
