import React, { useState } from "react";
import { useEffect } from "react";
import { } from "react-router-dom";
import data from "../../../../data.json";
import ContactNowBtn from "../../../ContactNowBtn";
// import Eachdepartment from "./Eachdepartment";
import "./department.css";
import FlipPart from "./FlipPart";

const departmentdata = data.departmentname.slice(0, 8);
const Department = () => {
  const [departments, setdepartment] = useState([]);
  useEffect(() => {
    setdepartment(departmentdata);
  }, []);

  return (
    <div className="py-16 md:py-16 bg-blue-50 department">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-primary text-center">Popular Departments</h1>
        <div className="mt-16 grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-3 md:gap-6 px-3">
          {departments.map((department) => (
            <FlipPart dep_details={department.dep_details} department_name={department.department} icon={department.icon} key={department.id} />
          ))}
        </div>
        <ContactNowBtn />
      </div>
    </div>
  );
};

export default Department;
