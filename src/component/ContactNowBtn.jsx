import React from "react";
import { Link } from "react-router-dom";

const ContactNowBtn = () => {
  return (
    <Link
      to="contact-now"
      className="max-w-[250px] block mx-auto font-bold w-full p-3 bg-primary text-center mt-10 rounded-full text-white text-xl hover:bg-transparent hover:text-black hover:outline outline-1 outline-green-500 duration-150"
    >
      Contact Now
    </Link>
  );
};

export default ContactNowBtn;
