/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { Form, Field, Formik, ErrorMessage } from "formik"
import React, { useState, useEffect } from "react";
import * as Yup from 'yup';

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
  // validate url for publications

  // yub validation
  const doctorsDataSchema = Yup.object().shape({
    doctorName: Yup.string().min(3, "too short").max(30, "too Long").required("Required"),
    designation: Yup.string().min(4, "too short").max(50, "too long").required("Required"),
    academicBg: Yup.string().min(4, "too short").max(50, "too long").required("Required"),
    experience: Yup.number().min(1, "minimum 1 year").max(50, "too long").required("Required"),
    expertise: Yup.string().min(4, "too short").max(50, "too long").required("Required"),
    awards: Yup.string().min(4, "too short").max(50, "too long").required("Required"),
    presentWorkStation: Yup.string().min(4, "too short").max(50, "too long").required("Required"),
    previousWorkStation: Yup.string().min(4, "too short").max(50, "too long").required("Required"),
    doctorsPhone: Yup.string().min(11, "minimum 11 digit").max(14, "too long").required("Required"),
    doctorsEmail: Yup.string().email('Invalid email').required('Required'),
    contactPersonName: Yup.string().min(4, "too short").max(50, "too long").required("Required"),
    contactPersonNumber: Yup.string().min(11, "minimum 11 digit").max(14, "too long").required("Required"),
    servingCountry: Yup.string().required("Required"),
    servingState: Yup.string().required("Required"),
    serveingCity: Yup.string().required("Required"),
    btobStatus: Yup.number().min(5, "Too short").max(100, "should within 100%").required("Required"),
    rating: Yup.string().required("Required"),
    publication: Yup.string().required("required")
  })


  const initialValue = {
    doctorName: "",
    designation: "",
    academicBg: "",
    experience: "",
    expertise: "",
    awards: "",
    presentWorkStation: "",
    previousWorkStation: "",
    doctorsPhone: "",
    doctorsEmail: "",
    contactPersonName: "",
    contactPersonNumber: "",
    servingCountry: "",
    servingState: "",
    serveingCity: "",
    btobStatus: "",
    rating: "",
    publication: ""
  }
  // handle submit data form the form
  // const onSubmit = values => {
  //   console.log(values)
  // }

  return (
    <div className="p-3">
      <h1 className="font-bold text-2xl text-left">Doctor Data</h1>
      <div className="rounded mt-4 bg-gray-100 max-w-[70%]">
        <div className="text-whit first-col p-4">
          <Formik initialValues={initialValue} validationSchema={doctorsDataSchema} onSubmit={onsubmit}>
            <Form className="text-left">
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
                  <Field type="text" name="doctorName" className="text-black block w-full rounded  p-1 outline-none" placeholder="Doctor Name" />
                  <div className="text-red-600"><ErrorMessage name="doctorName" /></div>
                </div>
                <div className="w-2/4">
                  <h4 className="font-semibold ">Designation</h4>
                  <Field type="text" name="designation" max="100" className="text-black block w-full rounded  p-1 outline-none" placeholder="Chariman, Director, Professor, HOD etc" />
                  <div className="text-red-600"><ErrorMessage name="designation" /></div>
                </div>
              </div>
              {/* doctorname-designation end */}

              {/* City and State End */}
              <div className=" text-black my-8 gap-x-4 flex">
                <div className="w-4/5">
                  <label htmlFor="" className="font-semibold ">
                    Academic Backgrounds
                  </label>
                  <Field type="text" name="academicBg" className="text-black block w-full rounded  p-1 outline-none" placeholder="MBBS, MD, DNB Recoreds" />
                  <div className="text-red-600"><ErrorMessage name="academicBg" /></div>
                </div>

                <div className="w-1/5">
                  <label htmlFor="" className="font-semibold ">
                    Experiences
                  </label>
                  <Field type="number" name="experience" className="text-black block w-full rounded  p-1 outline-none" placeholder="Years" />
                  <div className="text-red-600"><ErrorMessage name="experience" /></div>
                </div>
              </div>
              {/* Years of Experience Academic Background end */}
              <div className="text-black my-8 flex gap-x-4">
                <div className="w-2/4">
                  <label htmlFor="" className="font-semibold ">
                    Expertise
                  </label>
                  <Field type="text" name="expertise" className="text-black block w-full rounded  p-1 outline-none" placeholder="Cardiologist, Trasplant Specialist" />
                  <div className="text-red-600"><ErrorMessage name="expertise" /></div>
                </div>
                <div className="w-2/4">
                  <label htmlFor="" className="font-semibold ">
                    Awards
                  </label>
                  <Field type="text" name="awards" className="text-black block w-full rounded  p-1 outline-none" placeholder="Presidential Medal" />
                  <div className="text-red-600"><ErrorMessage name="awards" /></div>
                </div>
              </div>
              {/* Expart in awared end */}
              <div className="text-black my-8 flex gap-x-4">
                <div className="w-2/4">
                  <label htmlFor="" className="font-semibold ">
                    Present Workstation
                  </label>
                  <Field type="text" name="presentWorkStation" className="text-black block w-full rounded  p-1 outline-none" placeholder="Present Workstation" />
                  <div className="text-red-600"><ErrorMessage name="presentWorkStation" /></div>
                </div>
                <div className="w-2/4">
                  <label htmlFor="" className="font-semibold ">
                    Previous Workstation
                  </label>
                  <Field type="text" name="previousWorkStation" className="text-black block w-full rounded  p-1 outline-none" placeholder="Previous Workstation" />
                  <div className="text-red-600"><ErrorMessage name="previousWorkStation" /></div>
                </div>
              </div>
              {/* Present WorkStation-Previous WorkStation end */}
              <div className="Required-services text-black my-8 flex gap-x-4">
                <div className="w-2/4">
                  <label htmlFor="" className="font-semibold ">
                    Phone No
                  </label>
                  <Field type="number" name="doctorsPhone" className="text-black block w-full rounded  p-1 outline-none" placeholder="Doctor's Personal No" />
                  <div className="text-red-600"><ErrorMessage name="doctorsPhone" /></div>
                </div>
                <div className="w-2/4">
                  <label htmlFor="" className="font-semibold ">
                    Email
                  </label>
                  <Field type="email" name="doctorsEmail" className="text-black block w-full rounded  p-1 outline-none" placeholder="Doctor's Email" />
                  <div className="text-red-600"><ErrorMessage name="doctorsEmail" /></div>
                </div>
              </div>
              {/* Email  Phone No - end */}
              <div className="assistant-number text-black my-8 flex gap-x-4">
                <div className="w-2/4">
                  <label htmlFor="" className="font-semibold ">
                    Contact Person
                  </label>
                  <Field type="text" name="contactPersonName" className="text-black block w-full rounded  p-1 outline-none" placeholder="Contact Person Name" />
                  <div className="text-red-600"><ErrorMessage name="contactPersonName" /></div>
                </div>
                <div className="w-2/4">
                  <label htmlFor="" className="font-semibold ">
                    Contact Person Number
                  </label>
                  <Field type="number" name="contactPersonNumber" className="text-black block w-full rounded  p-1 outline-none" placeholder="Contact Person Number" />
                  <div className="text-red-600"><ErrorMessage name="contactPersonNumber" /></div>
                </div>
              </div>
              {/* Contact Person Number end */}
              <div className="assistant-number text-black my-8 flex gap-x-4">
                <div className="w-2/6">
                  <label htmlFor="" className="font-semibold ">
                    Serving Country
                  </label>
                  <select name="servingCountry" id="" className="block w-full rounded outline-none  p-1" onChange={(e) => handlecountry(e)}>
                    <option value="DEFAULT" className="w-full">
                      --Select--
                    </option>
                    {country.map((country, index) => (
                      <option value={country.name} key={index}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <div className="text-red-600"><ErrorMessage name="servingCountry" /></div>
                </div>
                <div className="w-2/6">
                  <label htmlFor="" className="font-semibold ">
                    States
                  </label>
                  <select name="servingState" id="" className="block w-full rounded outline-none  p-1" onChange={(e) => handleState(e)}>
                    <option value="DEFAULT" className="w-full">
                      --Select--
                    </option>
                    {state.map((state, index) => (
                      <option value={state.value} key={index}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                  <div className="text-red-600"><ErrorMessage name="servingState" /></div>
                </div>
                <div className="w-2/6">
                  <h4 className="font-semibold ">City</h4>
                  <select name="serveingCity" className="block w-full rounded outline-none  p-1">
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
                  <div className="text-red-600"><ErrorMessage name="serveingCity" /></div>
                </div>
              </div>
              <div className="publication text-black my-8 flex gap-x-4">
                <div className="w-2/4">
                  <label htmlFor="" className="font-semibold ">
                    B2B Status
                  </label>
                  <Field type="number" name="btobStatus" className="text-black block w-full rounded  p-1 outline-none" placeholder="Percentage" />
                  <div className="text-red-600"><ErrorMessage name="btobStatus" /></div>
                </div>
                <div className="w-2/4">
                  <label htmlFor="" className="font-semibold ">
                    Rating
                  </label>
                  <Field type="text" name="rating" className="text-black block w-full rounded  p-1 outline-none" placeholder=" A+, AA, A" />
                  <div className="text-red-600"><ErrorMessage name="rating" /></div>
                </div>
              </div>
              <div className="publication-serving-country text-black my-8 flex">
                <div className="w-full">
                  <label htmlFor="" className="font-semibold ">
                    Publications
                  </label>
                  <Field type="text" name="publication" placeholder="Publications URL" className="w-full p-1 outline-none"></Field>
                  <div className="text-red-600"><ErrorMessage name="publication" /></div>
                </div>
              </div>
              {/* publication-photo-visiting card end */}
              {/* <Field type="submit" value="Submit" className="py-2 text-white bg-primary w-full cursor-pointer rounded" /> */}
              {/* contact-alt end */}
              <button className="py-2 text-white bg-primary w-full cursor-pointer rounded" type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
        {/* first cols end */}
      </div>
    </div>
  );
};
export default AddDoctors;
