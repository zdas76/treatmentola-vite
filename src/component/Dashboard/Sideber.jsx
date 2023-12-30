import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Sideber = () => {
  const navigate = useNavigate();
  const { admin } = useContext(AuthContext);
  const handleLogout = () => {
    window.localStorage.removeItem("admin-access");
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-start items-start w-full bg-slate-800 rounded-t-lg rounded-b-lg relative">
      <p className=" text-white text-xl py-3 text-center w-full bg-slate-900 block">User Information</p>
      <div>
        <h4 className="md:pl-3 font-bold text-white lg:text-xl uppercase">Admin panel</h4>
        <ul className="flex flex-col gap-4 p-2 text-base-content text-left mt-4 lg:pl-5">
          <li className="text-white text-md ml-5">
            <Link to="/dashboard/patient-request-page" className="hover:text-gray-400">
              Requested Patient
            </Link>
          </li>
          <li className="text-white text-md ml-5">
            <Link to="/dashboard/addpatient" className="hover:text-gray-400">
              Add Patient
            </Link>
          </li>
          <li className="text-white text-md ml-5">
            <Link to="/dashboard/add_doctor" className="hover:text-gray-400">
              Add Doctors
            </Link>
          </li>
          <li className="text-white text-md ml-5">
            <Link to="/dashboard/add_hospitals" className="hover:text-gray-400">
              Add Hospitals
            </Link>
          </li>
          <li className="text-white text-md ml-5">
            <Link to="/dashboard/addservice" className="hover:text-gray-400">
              Add Services
            </Link>
          </li>
          <li className="text-white text-md ml-5">
            <Link to="/dashboard/get_primary_user" className="hover:text-gray-400">
              Get All Primary User
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-slate-900 w-full rounded-b-lg absolute left-0 bottom-0">
        <div className="flex items-center justify-center ">
          <span className="text-white text-xl mx-2  ">
            <RiLogoutBoxRLine />
          </span>
          <button onClick={handleLogout} className="text-white text-xl py-1 " type="submit">
            Log Out {`(${admin?.name})`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sideber;
