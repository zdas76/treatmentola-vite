import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";

import Sideber from "../Sideber";

const Dashboard = () => {
  const [sidMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <div className="h-full">
      <div>
        <div onClick={() => setSideMenuOpen(!sidMenuOpen)} className="md:hidden">
          <span className="cursor-pointer text-3xl font-bold">
            <HiMenuAlt2 />
          </span>
        </div>
      </div>
      <div className="flex h-full">
        <div className={`md:w-3/12 min-h-[100vh] flex absolute md:static left-0 top-20 md:flex  ${sidMenuOpen ? "flex" : "hidden"}`}>
          <Sideber />
        </div>
        <div className="md:w-11/12 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
