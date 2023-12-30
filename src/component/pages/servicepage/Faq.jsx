import React, { useState } from "react";

const Faq = ({ question, answer }) => {
  const [isactive, setIsactive] = useState(false);
  return (
    <div className="text-left border my-2">
      <h2
        className={`font-bold cursor-pointer px-3 py-1 flex items-center justify-between duration-300 ${!isactive ? "text-black" : "text-primary"}`}
        onClick={() => setIsactive((prev) => !prev)}
      >
        {question} ? {isactive ? <b className="text-2xl">-</b> : <b className="text-2xl ml-auto">+</b>}
      </h2>
      {isactive && <p className="mt-2 p-2 duration-300">{answer}</p>}
    </div>
  );
};

export default Faq;
