import Image from "next/image";
import React from "react";

const Display = () => {
  return (
    <div className="bg-[#fff9e5] min-h-screen flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] items-center w-full max-w-6xl mx-auto">


        {/* Image Section */}
        <div className="flex justify-end items-center">
          <div className="rounded-lg  w-full max-w-[500px] md:max-w-[863px] sm:mx-auto">
            <Image
              src="/Group 23.png"
              alt="Rocket Single Seater"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        {/* Text Section */}
         <div className="text-center md:text-left flex justify-center items-center flex-col gap-4">
           
          <button className="border py-4 px-8"></button>
        </div>
      </div>
    </div> 
  );
};

export default Display;