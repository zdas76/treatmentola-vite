import React from "react";
import Department from "./department section/Department";
import OurService from "./OurService/OurService";
// import Treatment from "./treatmentBytype/Treatment";
import SearchService from "./SearchService";
import Networkhospital from "./networkhospital/Networkhospital";
import HowWework from "./wework/HowWework";
// import DoctorSlide from "./doctors/DoctorSlide";
import { Helmet } from "react-helmet-async";
import Call from "../../directCall/Call";
import Counter from "./Counter/Counter";

const HomePage = () => {
  return (
    <div className="">
      {/* call for mobile and desktop */}
      <Call />

      <Helmet>
        <title>TreatmentOla দেশ-বিদেশে চিকিৎসা</title>
        <meta property="og:title" content="দেশ-বিদেশে চিকিৎসা" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:description" content="TreatmentOla Healthcare Ltd." />
        <meta property="og:image" content="https://treatmentola.com/blog/wp-content/uploads/2023/06/treatmentolalogo.png" />
        <meta property="og:url" content="https://treatmentola.com/home" />
        <meta name="description" content="TreatmentOla Healthcare Ltd." />
        <meta name="keywords" content="treatment, foregin treatment, medical visa, organ transplant" />
        <meta name="twitter:site" content="@yourTwitterHandle" />
        <meta name="twitter:title" content="দেশ-বিদেশে উন্নত চিকিৎসা" />
        <meta name="twitter:description" content="TreatmentOla Healthcare Ltd." />
        <meta name="twitter:image" content="https://treatmentola.com/blog/wp-content/uploads/2023/06/treatmentolalogo.png" />
      </Helmet>
      <SearchService />
      <OurService />
      <HowWework />
      {/* <Treatment /> */}
      <Department />
      <Networkhospital />
      {/* <DoctorSlide /> */}
      <Counter />
    </div>
  );
};

export default HomePage;
