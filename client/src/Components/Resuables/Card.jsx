import React from "react";

const Card = ({ text, img, background }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="rounded-2xl relative flex w-[200px] h-[100px] lg:w-[500px] justify-around items-center lg:h-[200px] bg-no-repeat  bg-cover"
    >
      <div className="">
        <img
          src={img}
          alt="alternate"
          className="w-[100px] lg:w-[200px] lg:mt-10"
        />
      </div>
      <p className="text-lg lg:text-3xl text-white lg:mt-20 font-serif">
        {text}
      </p>
    </div>
  );
};

export default Card;
