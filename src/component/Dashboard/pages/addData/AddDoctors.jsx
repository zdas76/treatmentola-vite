/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { setLocale } from "yup";

const AddDoctors = () => {
  const time = new Date();
  const customId = time.getMonth() + 1 + "" + time.getHours() + "" + time.getMinutes() + "" + time.getSeconds();
  // const [loading, setloading] = useState(true);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  // const [error, seterror] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const result = await fetch("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json");
      const jsonData = await result.json();
      setCountry(await jsonData);
    };
    // fetch("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json")
    //   .then((response) => response.json())
    //   .then((data) => setCountry(data));
    fetchdata();
  }, []);

  const handlecountry = (event) => {
    const selectedCountry = event.target.value;
    country.map((specificcountry) => {
      if (selectedCountry === specificcountry.name) {
        setState(specificcountry.states);
      }
    });
  };
  const handleState = (event) => {
    const selectedState = event.target.value;
    state.map((specificstate) => {
      if (selectedState === specificstate.name) {
        setCity(specificstate.cities);

        // setCity(specificstate.cities); //its the arry of City inside State
      }
    });
  };
  // console.log(city);
  return (
    <div className="p-3">
      <h1 className="font-bold text-2xl text-left">Doctor Data</h1>
      <div className="rounded mt-4 bg-gray-100 max-w-[70%]">
        <div className="text-whit first-col p-4">
          <form action="" className="text-left">
            <div className="customer-registration text-black mb-10 flex md:gap-x-4 justify-between">
              <h4 className="font-semibold ">Doctor ID : {customId}</h4>
              <h4 className="font-semibold ">Time: {time.toLocaleTimeString()}</h4>
            </div>
            {/* customer id and time of registration */}
            <div className="doctorname-designation text-black my-8 flex gap-x-4">
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Doctor Name
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="Doctor Name" />
              </div>
              <div className="w-2/4">
                <h4 className="font-semibold ">Designation</h4>
                <input type="number" max="100" className="text-black block w-full rounded  p-1 outline-none" placeholder="Chariman, Director, Professor, HOD etc" />
              </div>
            </div>
            {/* doctorname-designation end */}

            {/* City and State End */}
            <div className=" text-black my-8 gap-x-4 flex">
              <div className="w-4/5">
                <label htmlFor="" className="font-semibold ">
                  Academic Backgrounds
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="MBBS, MD, DNB Recoreds" />
              </div>

              <div className="w-1/5">
                <label htmlFor="" className="font-semibold ">
                  Experiences
                </label>
                <input type="number" className="text-black block w-full rounded  p-1 outline-none" placeholder="Years" />
              </div>
            </div>
            {/* Years of Experience Academic Background end */}
            <div className="text-black my-8 flex gap-x-4">
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Expertise
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="Cardiologist, Trasplant Specialist" />
              </div>
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Awards
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="Presidential Medal" />
              </div>
            </div>
            {/* Expart in awared end */}
            <div className="text-black my-8 flex gap-x-4">
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Present Workstation
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="Present Workstation" />
              </div>
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Previous Workstation
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder="Previous Workstation" />
              </div>
            </div>
            {/* Present WorkStation-Previous WorkStation end */}
            <div className="Required-services text-black my-8 flex gap-x-4">
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Phone No
                </label>
                <input type="number" className="text-black block w-full rounded  p-1 outline-none" placeholder="Doctor's Personal No" />
              </div>
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Email
                </label>
                <input type="email" className="text-black block w-full rounded  p-1 outline-none" placeholder="Doctor's Email" />
              </div>
            </div>
            {/* Email  Phone No - end */}
            <div className="assistant-number text-black my-8 flex gap-x-4">
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Contact Person
                </label>
                <input type="number" className="text-black block w-full rounded  p-1 outline-none" placeholder="Contact Person Name" />
              </div>
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Contact Person Number
                </label>
                <input type="number" className="text-black block w-full rounded  p-1 outline-none" placeholder="Contact Person Number" />
              </div>
            </div>
            {/* Contact Person Number end */}
            <div className="assistant-number text-black my-8 flex gap-x-4">
              <div className="w-2/6">
                <label htmlFor="" className="font-semibold ">
                  Serving Country
                </label>
                <select name="" id="" className="block w-full rounded outline-none  p-1" onChange={(e) => handlecountry(e)}>
                  <option value="DEFAULT" className="w-full">
                    --Select--
                  </option>
                  {country.map((country, index) => (
                    <option value={country.name} key={index}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-2/6">
                <label htmlFor="" className="font-semibold ">
                  States
                </label>
                <select name="" id="" className="block w-full rounded outline-none  p-1" onChange={(e) => handleState(e)}>
                  <option value="DEFAULT" className="w-full">
                    --Select--
                  </option>
                  {state.map((state, index) => (
                    <option value={state.value} key={index}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-2/6">
                <h4 className="font-semibold ">City</h4>
                <select className="block w-full rounded outline-none  p-1">
                  <option value="DEFAULT" className="w-full">
                    --Select--
                  </option>
                  {city.map((city, index) => {
                    return (
                      <option key={index} value={city.name}>
                        {city.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="publication text-black my-8 flex gap-x-4">
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  B2B Status
                </label>
                <input type="number" className="text-black block w-full rounded  p-1 outline-none" placeholder="Percentage" />
              </div>
              <div className="w-2/4">
                <label htmlFor="" className="font-semibold ">
                  Rating
                </label>
                <input type="text" className="text-black block w-full rounded  p-1 outline-none" placeholder=" A+, AA, A" />
              </div>
            </div>
            <div className="publication-serving-country text-black my-8 flex">
              <div className="w-full">
                <label htmlFor="" className="font-semibold ">
                  Publications
                </label>
                <input type="text" placeholder="Publications URL" className="w-full p-1 outline-none"></input>
              </div>
            </div>
            {/* publication-photo-visiting card end */}
            <input type="submit" value="Submit" className="py-2 text-white bg-primary w-full cursor-pointer rounded" />
            {/* contact-alt end */}
          </form>
        </div>
        {/* first cols end */}
      </div>
    </div>
  );
};
export default AddDoctors;
