import React from "react";
import "./addData.css";
const Addpatient = () => {
  const time = new Date();
  const customId = time.getMonth() + 1 + "" + time.getHours() + "" + time.getMinutes() + "" + time.getSeconds();
  const addmore = () => {
    let addfile = document.getElementById("file-parent");
    const newfilefield = document.createElement("input");
    newfilefield.setAttribute("type", "file");
    addfile.appendChild(newfilefield);
  };
  return (
    <div className="p-3">
      <h1 className="font-bold text-2xl text-left">Patient Data</h1>
      <div className="rounded mt-4 bg-gray-100 md:max-w-[70%]">
        <div className="text-whit first-col p-4">
          <form action="" className="text-left">
            <div className="customer-registration text-black mb-10 flex md:gap-x-4 justify-between">
              <h4 className="font-semibold ">Patient ID : {customId}</h4>
              <h4 className="font-semibold ">Time: {time.toLocaleTimeString()}</h4>
            </div>
            {/* customer id and time of registration */}
            <div className="name-age text-black my-10 flex gap-x-4">
              <div className="w-2/5">
                <label htmlFor="" className="font-semibold ">
                  Patient Full Name
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="As Per NID or Passport" />
              </div>
              <div className="w-1/5">
                <h4 className="font-semibold ">Age:</h4>
                <input type="number" max="100" className="text-black block w-full rounded  p-1 outline-none" placeholder="Patient Age" />
              </div>
              <div className="w-1/5">
                <h4 className="font-semibold ">Gender:</h4>
                <select name="" id="" className="block w-full rounded  p-1">
                  <option value="DEFAULT" className="w-full">
                    Select
                  </option>
                  <option className="w-full" value="Male">
                    Male
                  </option>
                  <option className="w-full" value="Female">
                    Female
                  </option>
                  <option className="w-full" value="Others">
                    Others
                  </option>
                </select>
              </div>
              <div className="w-1/5">
                <h4 className="font-semibold ">NID/Passport (PDF)</h4>
                <input type="file" max="100" accept="application/pdf" className="text-black block w-full rounded  p-1 outline-none" placeholder="Patient Age" />
              </div>
            </div>
            {/* name-age end */}
            <div className="Address-gender text-black my-10 gap-x-4 flex">
              <div className="w-1/3">
                <label htmlFor="" className="font-semibold ">
                  Address
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="Address" />
              </div>
              <div className="w-1/3">
                <label htmlFor="" className="font-semibold ">
                  Thana
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="Thana" />
              </div>
              <div className="w-1/3">
                <label htmlFor="" className="font-semibold ">
                  District
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="District" />
              </div>
            </div>
            {/* Address gender end */}
            <div className="contact-alt text-black my-10 flex gap-x-4">
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Patient Phone
                </label>
                <input type="number" className="text-black block w-full rounded  p-1 outline-none" placeholder="Verified Phone Number" maxLength="11" />
              </div>
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Alternative Phone
                </label>
                <input type="number" className="text-black block w-full rounded  p-1 outline-none" placeholder="Verified Phone Number" maxLength="11" />
              </div>
            </div>
            {/* contact-alt end */}
            <div className="Problem-year text-black my-10 flex gap-x-4">
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Medical Issues
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="Problem" />
              </div>
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Years of Issues
                </label>
                <input type="number" className="text-black block w-full rounded  p-1 outline-none" placeholder="Years of Problem" />
              </div>
            </div>
            {/* Problem-year end */}
            <div className="Required-services text-black my-10 flex gap-x-4">
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Required Services
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="Service taken" />
              </div>
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Referred to
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="Doctor, Hospital Name" />
              </div>
            </div>
            {/* Required Service - end */}
            <div className="Lead-country text-black my-10 flex gap-x-4">
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Lead Source
                </label>
                <select name="" id="" className="block w-full rounded outline-none  p-2">
                  <option value="DEFAULT" className="w-full">
                    Select
                  </option>
                  <option className="w-full" value="Self">
                    Self
                  </option>
                  <option className="w-full" value="Agent">
                    Agent
                  </option>
                  <option className="w-full" value="Doctor">
                    Doctor
                  </option>
                  <option className="w-full" value="Facebook">
                    Facebook
                  </option>
                  <option className="w-full" value="Youtube">
                    YouTube
                  </option>
                  <option className="w-full" value="Advertisement">
                    Advertisement
                  </option>
                  <option className="w-full" value="Hospital Manager">
                    Hospital Manager
                  </option>
                </select>
              </div>
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Serveing Country
                </label>
                <select name="" id="" className="block w-full rounded outline-none  p-2">
                  <option value="DEFAULT" className="w-full">
                    Select
                  </option>
                  <option className="w-full" value="Bangladesh">
                    Bangladesh
                  </option>
                  <option className="w-full" value="India">
                    India
                  </option>
                  <option className="w-full" value="Thailand">
                    Thailand
                  </option>
                  <option className="w-full" value="Singapore">
                    Singapore
                  </option>
                </select>
              </div>
            </div>
            {/* Lead-source-serv-country end */}
            <div className="Previous-Record text-black my-10">
              <div className="flex justify-between">
                <label htmlFor="" className="font-semibold  mb-3">
                  Medical Record, If Available (PDF)
                </label>
                <button onClick={addmore} type="button" className="btn-primary py-0 px-6 text-sm mb-2">
                  Add more +
                </button>
              </div>
              <div id="file-parent">
                {/* <input
                  type="file"
                  id="file"
                  className="text-black block w-full rounded  p-1 bg-white cursor-pointer outline-none"
                  placeholder="Self, by Doctor, Direct"
                /> */}
              </div>
            </div>
            {/* Previous-Record end */}
            <input type="submit" value="Submit" className="py-2 text-white bg-primary w-full cursor-pointer rounded" />
            {/* contact-alt end */}
          </form>
        </div>
        {/* first cols end */}
      </div>
    </div>
  );
};

export default Addpatient;
