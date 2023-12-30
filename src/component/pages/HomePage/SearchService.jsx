import React from "react";
const SearchService = () => {
  return (
    <div className="max-w-[1000px] mx-auto my-3">
      <form action="#">
        <input
          className="w-full rounded-full focus:outline-none border text-xl border-primary text-primary px-3 text-center py-2 placeholder:text-sm md:placeholder:text-xl"
          type="text"
          placeholder="Search by disease, procedure, doctor, hospital"
        />
      </form>
    </div>
  );
};

export default SearchService;
