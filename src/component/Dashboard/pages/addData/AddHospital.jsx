import React from "react";

const AddHospital = () => {
  return (
    <div className="p-3">
      <h1 className="font-bold text-2xl text-left">Hospitals</h1>
      <div className="rounded mt-4 py-10 bg-gray-100 md:max-w-[70%]">
        <div className="text-whit first-col p-4">
          <form action="" className="text-left">
            <div className="id-entity text-black my-10 flex gap-x-4">
              <div className="w-2/5">
                <label htmlFor="" className="font-semibold ">
                  Entity Name
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="Hospital, Diagnostic or Chamber Name" />
              </div>
              <div className="w-2/5">
                <h4 className="font-semibold ">Entity Type</h4>
                <select name="" id="" className="block w-full rounded  p-1">
                  <option value="DEFAULT" className="w-full">
                    Select
                  </option>
                  <option className="w-full" value="Government">
                    Government
                  </option>
                  <option className="w-full" value="Semi-Government">
                    Semi-Government
                  </option>
                  <option className="w-full" value="Private">
                    Private
                  </option>
                  <option className="w-full" value="Charity">
                    Charity
                  </option>
                </select>
              </div>
              <div className="w-1/5">
                <label htmlFor="" className="font-semibold ">
                  Branch
                </label>
                <select name="" id="" className="block w-full rounded  p-1">
                  <option value="DEFAULT" className="w-full">
                    Select
                  </option>
                  <option className="w-full" value="Yes">
                    Yes
                  </option>
                  <option className="w-full" value="No">
                    No
                  </option>
                </select>
              </div>
            </div>
            {/* customer id and time of registration */}
            <div className="branch text-black my-10 flex gap-x-4">
              <div className="w-1/4">
                <h4 className="font-semibold ">Address</h4>
                <input type="number" max="100" className="text-black block w-full rounded  p-1 outline-none" placeholder="Address" />
              </div>
              <div className="w-1/4">
                <h4 className="font-semibold ">City</h4>
                <input type="number" max="100" className="text-black block w-full rounded  p-1 outline-none" placeholder="City" />
              </div>
              <div className="w-1/4">
                <h4 className="font-semibold ">State</h4>
                <input type="number" max="100" className="text-black block w-full rounded  p-1 outline-none" placeholder="State" />
              </div>
              <div className="w-1/4">
                <h4 className="font-semibold ">Country</h4>
                <input type="number" max="100" className="text-black block w-full rounded  p-1 outline-none" placeholder="Country" />
              </div>
            </div>
            {/* name-age end */}
            <div className="Address-gender text-black my-10 gap-x-4 flex">
              <div className="w-2/6">
                <label htmlFor="" className="font-semibold ">
                  Ranking
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="Ranking" />
              </div>
              <div className="w-2/6">
                <h4 className="font-semibold ">Range</h4>
                <select name="" id="" className="block w-full rounded  p-1">
                  <option value="DEFAULT" className="w-full">
                    Select
                  </option>
                  <option className="w-full" value="Low">
                    Low
                  </option>

                  <option className="w-full" value="Moderate">
                    Moderate
                  </option>

                  <option className="w-full" value="High">
                    High
                  </option>

                  <option className="w-full" value="Very Expnesive">
                    Very Expensive
                  </option>
                </select>
              </div>
              <div className="w-2/6">
                <label htmlFor="" className="font-semibold ">
                  B2B Status
                </label>
                <select name="" id="" className="block w-full rounded  p-1">
                  <option value="DEFAULT" className="w-full">
                    Select
                  </option>
                  <option className="w-full" value="Affiliated">
                    Affiliated
                  </option>
                  <option className="w-full" value="Not Affiliated">
                    Not Affiliated
                  </option>
                </select>
              </div>
            </div>
            {/* Address gender end */}

            <div className="Problem-year text-black my-10 flex gap-x-4">
              <div className="w-full">
                <label htmlFor="" className="font-semibold ">
                  Number of bed
                </label>
                <input type="number" className="text-black block w-full rounded  p-1 outline-none" placeholder="" />
              </div>
              <div className="w-full">
                <label htmlFor="" className="font-semibold ">
                  Location
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="" />
              </div>
            </div>
            {/* Problem-year end */}

            <input type="submit" value="Submit" className="py-2 text-white bg-primary w-full cursor-pointer rounded" />
            {/* contact-alt end */}
          </form>
        </div>
        {/* first cols end */}
      </div>
    </div>
  );
};

export default AddHospital;
