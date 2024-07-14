import React from "react";
import { FaGreaterThan } from "react-icons/fa";

const LotteryCard2 = ({ title, img, text }) => {
  return (
    <div className="card bg-white max-w-[500px] lg:max-w-[400px] xl:max-w-[500px]  py-2 px-2 rounded-xl flex justify-between items-center ">
      <div className="h-full w-[150px] text-gradient_2  px-3 pt-3 rounded-2xl flex flex-col   gap-3 justify-center items-center ">
        <p className="font-serif text-white font-semibold text-sm">{title}</p>
        <img src={img} alt="img" className="w-[100px]" />
      </div>
      <div className="flex flex-col ml-2 gap-2">
        <div className="flex justify-between items-center ">
          <h1 className="font-bold text-xl ">{title}</h1>
          <button className="flex justify-center items-center text-gradient_2 w-[130px] text-white gap-3 font-bold  rounded-3xl py-1">
            <span className="text-xl">Go</span>
            <span>
              <FaGreaterThan />
            </span>
          </button>
        </div>
        <div className="flex justify-around  bg-gray-200 py-2 rounded-lg items-center">
          <p className="text-[12px] border-r-[1px] border-gray-400 pr-10">
            The higest bonuses in history
          </p>
          <h2 className="text-orange-500 text-lg font-semibold ">Rs0.00</h2>
        </div>
        <div>
          <p className="border-l-4 text-sm  px-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default LotteryCard2;
