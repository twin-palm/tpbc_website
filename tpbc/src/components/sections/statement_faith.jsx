import React from "react";
import { statement_of_faith } from "../data";
import { FaCircle } from "react-icons/fa";

const statement_faith = () => {
  return (
    <div className="p-10 flex flex-col gap-12 justify-center items-center">
      <div className="text-white font-bold text-3xl px-10 py-4 rounded-md bg-purple-400">
        Our Statement of Faith
      </div>

      <div className="w-full grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around ">
        {statement_of_faith.map((item, index) => (
          <div key={index} className="flex">
            <FaCircle
              size={40}
              className="text-purple-400 opacity-35 !w-10 !h-10"
            />
            <div className="flex flex-col gap-2 ml-4">
              <h2 className="font-semibold text-xl">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default statement_faith;
