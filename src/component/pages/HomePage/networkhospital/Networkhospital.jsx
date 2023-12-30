// import Slider from "./Slider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect } from "react";
import data from "../../../../data.json";
import "./hospital.css";
const Networkhospital = () => {
  const [slideitem, setslideitem] = useState([]);
  useEffect(() => {
    const slidedata = data.hospital;
    setslideitem(slidedata);
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1023, min: 800 },
      items: 4,
    },
    bigPhone: {
      breakpoint: { max: 789, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="py-6 md:py-20 bg-blue-50">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-10"> Network Hospital</h1>
        <Carousel
          className="cursor-grab"
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay
          autoPlaySpeed={2000}
        // keyBoardControl
        // minimumTouchDrag={80}
        // pauseOnHover
        // renderArrowsWhenDisabled={false}
        // renderButtonGroupOutside={false}
        // renderDotsOutside={true}
        >
          {slideitem.map((item) => {
            const { id, image, title } = item;
            return (
              <div className="border p-1 rounded bg-slate-100 shadow mx-2 mb-8 hospital-slide" key={id}>
                <div className="">
                  <img src={image} className="rounded-lg h-auto w-[100%] mx-auto" alt={title} />
                  <h4 className="font-semibold text-xl m-2 text-center">{title}</h4>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Networkhospital;
