import React from "react";
import { Helmet } from "react-helmet-async";
import ContactNow from "./ContactNow";
// import Call from "../../directCall/Call";

const Contactus = () => {
  return (
    <div>
      <Helmet>
        <title>Tratmentola || Contact Us</title>
      </Helmet>
      <ContactNow />
    </div>
  );
};

export default Contactus;
