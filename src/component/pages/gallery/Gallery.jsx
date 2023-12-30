import React from "react";
import { Helmet } from "react-helmet-async";
import Call from "../../directCall/Call";
const Gallery = () => {
  return (
    <div className="md:h-screen">
      <Call />
      <Helmet>
        <title>Tratmentola || Gallery</title>
      </Helmet>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl md:3xl font-semibold"> Under Construction</h1>
      </div>
    </div>
  );
};

export default Gallery;
