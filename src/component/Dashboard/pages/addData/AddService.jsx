import React from "react";

const AddService = () => {
  return (
    <>
      <h1 className="font-bold text-2xl text-left ml-5">Add Service</h1>
      <div className="bg-gray-100 py-3 mx-5 p-3 shadow m-4 rounded">
        <form className="flex flex-col items-start gap-y-6" action="">
          {/* service name */}
          <div className="flex flex-col items-start w-full">
            <label htmlFor="" className="text-lg font-bold">
              Service Name
            </label>
            <input type="text" className="rounded w-full mx-auto p-1 text-lg outline-none" placeholder="Enter service name" />
          </div>

          {/*  sevice description */}
          <div className="flex flex-col items-start w-full">
            <label htmlFor="" className="text-lg font-bold">
              Service Discription
            </label>
            <textarea name="" id="" className="rounded w-full mx-auto p-1 text-lg outline-none" placeholder="Enter service description"></textarea>
          </div>

          {/* choose a image */}
          <div className="flex flex-col items-start w-full">
            <label htmlFor="" className="text-lg font-bold">
              image
            </label>
            <input type="file" />
          </div>
          <input
            type="submit"
            value="Sent"
            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-full cursor-pointer"
          />
        </form>
      </div>
    </>
  );
};

export default AddService;
