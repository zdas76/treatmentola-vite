import React, { useEffect, useState } from "react";
import EachService from "./EachService";
import data from "../../../../data.json";
import { Link } from "react-router-dom";

const OurService = () => {
  const cutData = data.service.slice(0, 8);
  const [service, setService] = useState([]);

  useEffect(() => {
    setService(cutData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="my-10 max-w-[1200px] mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-primary">Our Services</h1>
      <div className="md:mt-14 mt-5 grid xs:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 lg:grid-cols-4">
        {service.map((service) => (
          <Link to={`service/${service.service_id}`} key={service.id}>
            <EachService serviceName={service.service_name} serviceDescription={service.service_description} icon={service.icon_url} />
          </Link>
        ))}
      </div>
      <Link
        to="contact-now"
        className="max-w-[250px] block mx-auto font-bold w-full p-3 bg-primary mt-10 rounded-full text-white text-xl hover:bg-transparent hover:text-black hover:outline outline-1 outline-green-500 duration-150"
      >
        Contact Now
      </Link>
    </div>
  );
};

export default OurService;
