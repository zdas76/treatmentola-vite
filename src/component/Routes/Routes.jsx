import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about/About";
import React from "react";
import Home from "../pages/HomePage/HomePage";
import Main from "../Layout/Main";
import Dashboard from "../Layout/dashboard";
import AddService from "../Dashboard/pages/addData/AddService";
// import Treatment from "../Dashboard/addData/Treatment";
import NotPage from "../shared/NotPage";
// import Service from "../pages/servicepage/Service";
import IndividualService from "../pages/servicepage/IndividualService";
import ContactNow from "../pages/contactPage/ContactNow";
import Blog from "../pages/blogpage/Blog";
import Gallery from "../pages/gallery/Gallery";
import Contactus from "../pages/contactPage/Contactus";
import Addpatient from "../Dashboard/pages/addData/Addpatient";
import PatientRequestPage from "../Dashboard/pages/addData/PatientRequestPage";
import AddDoctors from "../Dashboard/pages/addData/AddDoctors";
import AddHospital from "../Dashboard/pages/addData/AddHospital";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/service/:serviceId",
        element: <IndividualService></IndividualService>,
      },
      {
        path: "/service/:serviceId/contact-now",
        element: <ContactNow></ContactNow>,
      },
      // {
      //   path: "/service",
      //   element: <Service></Service>,
      // },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact-us",
        element: <Contactus></Contactus>,
      },
      {
        path: "/contact-now",
        element: <ContactNow></ContactNow>,
      },
      {
        path: "/admin/login",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "addservice",
        element: <AddService />,
      },

      {
        path: "add_doctor",
        element: <AddDoctors />,
      },
      {
        path: "addpatient",
        element: <Addpatient />,
      },
      {
        path: "add_hospitals",
        element: <AddHospital />,
      },
      {
        path: "patient-request-page",
        element: <PatientRequestPage />,
      },
      {
        path: "get_primary_user",
        element: <getAllPriUser />,
      },
    ],
  },
  {
    path: "*",
    element: <NotPage />,
  },
]);

export default router;
