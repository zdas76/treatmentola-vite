import React from "react";

const Call = () => {
  return (
    <>
      <div className="flex justify-center fixed bottom-0 inset-x-0 z-10 md:hidden">
        <a href="tel:+8809601701801" className="px-4 py-2 bg-green-500 hover:bg-primary flex-1 text-white font-semibold">
          Call Now
        </a>
        <a href="https://wa.me/+8801913878486" className="px-4 py-2 hover:bg-primary bg-green-600 flex-1 text-white font-semibold">
          Whats App
        </a>
      </div>
      {/* for desktop */}
      <div className="hidden md:flex justify-center fixed -right-2 rotate-90 z-20 top-1/2 -mr-24">
        <a href="tel:+8809601701801" className="px-4 py-2 hover:bg-primary bg-green-500 text-white font-semibold pt-10">
          Call Now
        </a>
        <a href="https://wa.me/+8801913878486" className="px-4 py-2 hover:bg-primary bg-green-600 text-white font-semibold pt-10">
          Whats App
        </a>
      </div>
    </>
  );
};

export default Call;
