import React from "react";
import { Helmet } from "react-helmet-async";
import img from "../../../img/treatment service.png";

import "./about.css";
import Call from "../../directCall/Call";
const About = () => {
  return (
    <>
      <Call />
      <Helmet>
        <title>Tratmentola || About us</title>
      </Helmet>
      <section className="about-top h-[75vh] p-2">
        <div className="flex justify-center items-center h-full text-white">
          <div>
            <h2 className="text-2xl md:text-6xl font-bold my-8 capitalize">
              Making Your <br /> Treatment Possible
            </h2>
            <p>
              TreatmentOla always working to deliver you affordable treatment <br /> in Bangladesh, India, Thailand & Singapore
            </p>
          </div>
        </div>
      </section>
      <section className="about-box -mt-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mx-2">
            <div className="shadow-md bg-primary text-white px-2 py-10">
              <h1 className="text-xl md:text-3xl my-4 font-semibold">No Hidden Charge </h1>
              <p> Our service do not increase your hospital bills. Rather we save your time, money and sufferings. </p>
            </div>
            <div className="shadow-md bg-primary text-white px-2 py-10">
              <h1 className="text-xl md:text-3xl my-4 font-semibold">Nominal Service Fees</h1>
              <p>We charge you very nominal fee besed on service you take.</p>
            </div>
            <div className="shadow-md bg-primary text-white px-2 py-10">
              <h1 className="text-xl md:text-3xl my-4 font-semibold">Secure and Reliable Service</h1>
              <p>We never share your medical data any other third-party with out your consent</p>
            </div>
            <div className="shadow-md bg-primary text-white px-2 py-10">
              <h1 className="text-xl md:text-3xl my-4 font-semibold">Your Own Choice</h1>
              <p>We Provide your treatment plan base on your currrent medical conditon or base on your own choice.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us py-2 sm:py-10 px-2">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col sm:flex-row mt-8 gap-x-4 items-center justify-center">
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-bold capitalize sm:my-10"> About Us</h1>
              <p className="text-justify p-2 text-lg">
                We are leading medical tourism service provider in Bangladesh Serving backed from 2019. We are committed to offering world-class healthcare services to
                patients across Bangladesh. Our mission is to provide patients with affordable, high-quality medical care while ensuring a seamless and hassle-free
                experience. We understand that traveling to a foreign country for medical treatment can be a daunting experience. We offer various services to ensure your
                journey is as comfortable and stress-free as possible. From travel arrangements and visa processing to accommodation and language interpretation, we take
                care of all the details so you can focus on your recovery. Our team comprises experienced medical professionals, travel experts, and customer service
                executives who work tirelessly to provide personalized care to each patient. We work with a network of top-tier hospitals and clinics across Bangladesh,
                India, Thailand, and Singapore, offering various medical specialties, including cardiology, oncology, orthopedics, neurology, and more. We also partner
                with accredited healthcare providers who have been thoroughly vetted and comply with international healthcare standards. Everyone deserves access to
                quality healthcare, regardless of geographical location or financial background. We are committed to providing affordable medical care to patients with
                transparent pricing and no hidden fees. We are proud to have served hundreds of patients from across the globe who have entrusted us with their healthcare
                needs. We strive to exceed our patient's expectations, delivering exceptional care and personalized attention at every step. We look forward to serving
                and helping you on your journey to good health.
              </p>
            </div>
            <div className="flex-1 justify-center">
              <img className="w-3/4 block mx-auto" src={img} alt="proper treatment" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
