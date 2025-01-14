import React from "react";
import { banner_data } from "../data";

const Home_banner = () => {
  return (
    <div className="mt-20 p-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center bg-[#F2CDFF] bg-opacity-30">
      {banner_data.map((item, index) => (
        <div key={index} className="flex flex-col gap-1 items-center">
          <span className="h-10 w-10 flex justify-center items-center">
            {item.icon}
          </span>{" "}
          <h1 className="text-lg font-bold mt-4">{item.title}</h1>
          <p className="text-sm text-center mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home_banner;
