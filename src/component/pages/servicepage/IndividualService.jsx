import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import data from "../../../data.json";
import ContactNowBtn from "../../ContactNowBtn";
import serviceDetailimg from "../../../img/individualtreatment.jpg";
import Faq from "./Faq";
import Call from "../../directCall/Call";

const IndividualService = () => {
  const { serviceId } = useParams();
  const serviceData = data.service;
  const service = serviceData.find((eachservice) => {
    return serviceId === eachservice.service_id;
  });

  return (
    <div className="pb-16 px-2">
      <Call />
      <Helmet>
        <title>{service.service_name}</title>
        <meta name="description" content={service.description} />
      </Helmet>
      <div className="container mx-auto">
        <h1 className="md:text-4xl font-bold text-2xl my-4 sm:my-10">
          {service.service_name}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
          <div className="">
            <p className="text-justify leading-8">{service.service_detail}</p>
            <div className="mt-3 w-full my-4">
              {service.faq.map((faq, i) => (
                <Faq key={i} question={faq.quistion} answer={faq.answer} />
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={serviceDetailimg} alt={service.service_name} />
          </div>
        </div>
        <ContactNowBtn />
      </div>
    </div>
  );
};

export default IndividualService;
