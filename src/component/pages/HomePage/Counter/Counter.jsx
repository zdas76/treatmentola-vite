import React, { useState } from "react";
import CountUp from "react-countup";
import { FaGlobeAsia, FaCity, FaHospitalUser, FaUserNurse, FaUniversalAccess } from "react-icons/fa";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counter, setCounter] = useState(false);
  return (
    <section className="py-10 bg-blue-50">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-primary">Achievements</h1>
        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
          <div className="grid mt-8 mx-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {/* countries */}
            <div className="shadow-lg bg-white rounded-xl p-4 flex justify-around items-center">
              <span className="text-primary">
                <FaGlobeAsia size={50} />
              </span>
              <div className="flex flex-col items-center">
                <div className="flex">
                  <h1 className="text-4xl font-bold text-blue-900">{counter && <CountUp start={0} duration={3} end={6} />}</h1>
                  <sup className="text-3xl font-bold -ml-1 text-blue-900">+</sup>
                </div>
                <h4 className="capitalize mt-1">Countries</h4>
              </div>
            </div>

            {/* Cities */}
            <div className="shadow-lg bg-white rounded-xl p-4 flex justify-around items-center">
              <span className="text-primary">
                <FaCity size={50} />
              </span>
              <div className="flex flex-col items-center justify-center">
                <div className="flex">
                  <h1 className="text-4xl font-bold text-blue-900">{counter && <CountUp start={0} duration={3} end={50} />}</h1>
                  <sup className="text-3xl font-bold -ml-1 text-blue-900">+</sup>
                </div>
                <span className="capitalize mt-1">Cities</span>
              </div>
            </div>

            {/* Hospitals */}
            <div className="shadow-lg bg-white rounded-xl p-4 flex justify-around items-center">
              <span className="text-primary">
                <FaHospitalUser size={50} />
              </span>
              <div className="flex flex-col items-center justify-center">
                <div className="flex">
                  <h1 className="text-4xl font-bold text-blue-900">{counter && <CountUp start={0} duration={3} end={100} />}</h1>
                  <sup className="text-3xl font-bold -ml-1 text-blue-900">+</sup>
                </div>
                <span className="capitalize mt-1">Hospitals</span>
              </div>
            </div>

            {/* doctors */}
            <div className="shadow-lg bg-white rounded-xl p-4 flex justify-around items-center">
              <span className="text-primary">
                <FaUserNurse size={50} />
              </span>
              <div className="flex flex-col items-center justify-center">
                <div className="flex">
                  <h1 className="text-4xl font-bold text-blue-900">{counter && <CountUp start={0} duration={3} end={1000} />}</h1>
                  <sup className="text-3xl font-bold -ml-1 text-blue-900">+</sup>
                </div>
                <span className="capitalize mt-1">doctors</span>
              </div>
            </div>

            {/* success */}
            <div className="shadow-lg bg-white rounded-xl p-4 hidden sm:flex justify-around items-center">
              <span className="text-primary">
                <FaUniversalAccess size={50} />
              </span>
              <div className="flex flex-col items-center justify-center">
                <div className="flex">
                  <h1 className="text-4xl font-bold text-blue-900">{counter && <CountUp start={0} duration={3} end={200} />}</h1>
                  <sup className="text-3xl font-bold -ml-1 text-blue-900">+</sup>
                </div>
                <span className="capitalize mt-1">Success</span>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default Counter;
