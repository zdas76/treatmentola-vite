// import React from "react";
// import data from "../../../../data.json";
// import EachDoctor from "./EachDoctor";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// const DoctorSlide = () => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//     },
//     tablet: {
//       breakpoint: { max: 1023, min: 800 },
//       items: 3,
//     },
//     bigPhone: {
//       breakpoint: { max: 789, min: 600 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 600, min: 0 },
//       items: 1,
//     },
//   };
//   return (
//     <div className="my-20 max-w-[1200px] mx-auto">
//       <h1 className="text-indigo-500 mb-10 md:text-4xl font-semibold text-3xl">Know the leading of experience doctors</h1>
//       <Carousel
//         className="cursor-grab"
//         swipeable={true}
//         draggable={true}
//         showDots={true}
//         responsive={responsive}
//         ssr={true} // means to render carousel on server-side.
//         infinite={true}
//       >
//         {data.doctors.map((doctors) => (
//           <EachDoctor name={doctors.name} designation={doctors.designation} image={doctors.image} key={doctors.id} />
//         ))}
//       </Carousel>
//     </div>
//   );
// };
// export default DoctorSlide;
