import React from "react";
import { Helmet } from "react-helmet-async";
import Call from "../../directCall/Call";

const Blog = () => {
  return (
    <div className="md:h-screen">
      <Call />
      <Helmet>
        <title>দেশ-বিদেশে কম খরচে উন্নত চিকিৎসা</title>
      </Helmet>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl text-center font-bold mt-10">Under Construction</h1>
      </div>
    </div>
  );
};

export default Blog;
