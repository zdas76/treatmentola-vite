import React from "react";
import { Link } from "react-router-dom";
import Call from "../../directCall/Call";
import Swal from "sweetalert2";

import "./contactus.css";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const ContactNow = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const age = parseInt(form.age.value);
    const address = form.address.value;
    const contact = form.contact.value;
    const reason = form.reason.value;

    const patient = {
      name,
      age,
      address,
      contact,
      reason
    }

    try {
      const result = await axios.post('/api/primaryusers/',

        patient,
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
          }
        }
      )
      console.log(result.data.data);
      let textName = result.data.data.name;
      Swal.fire({
        title: "Succes!",
        text: `Hello ${textName}, we will reach you shortly`,
        icon: "success",
        confirmButtonText: "Close",
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="md:py-10 flex items-center justify-center my-4 sm:my-0 md:h-screen">
      <Call />
      <Helmet>
        <title>Tratmentola || Contact Now</title>
      </Helmet>
      <div className="my-auto px-3 sm:px-2">
        <div className="mx-auto bg-primary max-w-[1200px] p-6 text-white rounded-lg shadow">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between gap-x-4 flex-col md:flex-row">
              <div className="text-left w-full md:w-1/2">
                <h3 className="text-2xl font-bold">Contact without Hesitation</h3>
                <p className="my-4 font-semibold">Submit Your Basic Information</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 my-4 ">
                  <div>
                    <label htmlFor="name">
                      Patient Name
                      <input
                        required
                        name="name"
                        className="outline-none p-2 rounded-md w-full my-4 sm:my-0 text-black"
                        type="text"
                        placeholder="রোগীর নাম *"
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="age">
                      Patient Age
                      <input
                        required
                        max="150"
                        name="age"
                        className="outline-none p-2 rounded-md w-full text-black my-4 sm:my-0"
                        type="number"
                        placeholder="রোগীর বয়স *"
                      />
                    </label>
                  </div>
                </div>
                <div className="w-full grid gap-x-2 my-4 grid-cols-1 sm:grid-cols-2">
                  <div>
                    <label htmlFor="address">
                      Address
                      <input
                        required
                        name="address"
                        className="outline-none p-2 rounded-md w-full text-black my-4 sm:my-0 "
                        type="text"
                        placeholder="ঠিকানা *"
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="phone">
                      Phone Number
                      <input
                        required
                        maxLength="11"
                        name="contact"
                        className="outline-none p-2 rounded-md w-full text-black my-4 sm:my-0"
                        type="number"
                        id="phone"
                        placeholder="যোগাযোগের নাম্বার*"
                      />
                    </label>
                  </div>
                </div>
                <label htmlFor="message">
                  Your Message
                  <textarea
                    required
                    className="w-full outline-none rounded-md p-2 text-black"
                    name="reason"
                    id=""
                    rows="5"
                    placeholder="সমস্যার কথা লিখুন"
                  ></textarea>
                </label>
                <input type="submit" value="Submit" className="bg-amber-500 rounded-md outline-0 px-4 py-2 my-6 w-full sm:w-1/2 text-xl font-semibold  cursor-pointer" />
              </div>
              <div className="w-full md:w-1/2 md:px-10">
                <h3 className="text-2xl font-bold text-left">More Contact Information</h3>
                <div className="mt-10 text-left">
                  <address className=""> If needed send your medical report at our email. </address>

                  <i className="my-6 block">
                    <span className="text-lime-500 font-bold">Call Us:</span>
                    <a className="hover:font-bold mx-2" href="tel:+8809601701801">
                      +8809601701801
                    </a>
                  </i>

                  <i className="my-6 block">
                    <span className="text-lime-500 font-bold">Email:</span>
                    <a className="hover:font-bold mx-2" href="mailto:treatmentola@gmail.com">
                      treatmentola@gmail.com
                    </a>
                  </i>
                  <address>
                    <b className="text-lime-500"> Physical Address </b> : Genetic Plaza (5th Floor), House #16, Road 16 (Old 27), Dhanmondi, Dhaka 1209, Bangladesh.
                  </address>
                </div>
                <div>
                  <h3 className="font-bold  text-2xl text-left my-4">Follow Us</h3>
                  <div className="social-midea">
                    <ul className="list-none flex justify-start gap-x-5">
                      <li className="">
                        <a href="https://facebook.com/treatmentola" target="_blank" rel="noreferrer noopener">
                          facebook
                        </a>
                      </li>
                      <li className="">
                        <Link>Twitter</Link>
                      </li>
                      <li className="">
                        <Link>Linkedin</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <ScrollRestoration /> */}
    </div>
  );
};

export default ContactNow;
