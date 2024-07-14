import React from "react";

const Card2 = ({ text, img, background }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="relative flex w-[150px] h-[100px] lg:w-[300px] justify-around items-center lg:h-[180px] mt-5 bg-no-repeat bg-center bg-cover "
    >
      <div className="">
        <img src={img} alt="alternate" className="w-[200px] mt-5" />
      </div>
      <p className="lg:text-2xl text-white mr-8 mb-8 font-serif">{text}</p>
    </div>
  );
};

export default Card2;
