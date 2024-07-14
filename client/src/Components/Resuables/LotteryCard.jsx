import React from "react";
import { FaGreaterThan } from "react-icons/fa";

const LotteryCard = ({ text, img, background }) => {
  return (
    <div
      //   style={{
      //     backgroundImage: `url(${background})`,
      //   }}
      className="relative flex   items-center  mt-5  text-gradient  rounded-3xl flex-col"
    >
      <p className="text-xl text-white mr-8 mb-8 font-serif pt-5 xl:text-2xl">
        {text}
      </p>

      <div className="">
        <img src={img} alt="alternate" className="w-[80px] xl:w-[100px]" />
      </div>
      <button className="text-white border-2 border-white px-10 rounded-2xl self-end m-5 flex justify-center items-center py-2 gap-5">
        Go <FaGreaterThan />
      </button>
    </div>
  );
};

export default LotteryCard;
