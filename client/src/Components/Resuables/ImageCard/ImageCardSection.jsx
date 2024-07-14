import React, { Fragment } from "react";
import ImageCard from "./ImageCard";
import { PiGameController } from "react-icons/pi";

const ImageCardSection = ({ title, imagesUrl }) => {
  console.log(imagesUrl);
  return (
    <Fragment>
      <div className="name flex justify-between items-center mt-10">
        <p className="font-bold border-l-8 border-green-400 px-2 text-xl">
          {title}
        </p>
      </div>
      <div className="cards flex gap-5 mt-5 flex-wrap px-2">
        {imagesUrl.map((img) => (
          <ImageCard img={img} />
        ))}
      </div>
      <button className=" mx-auto text-xl font-semibold text-green-600 py-3 mt-10 rounded-3xl gap-2 rounde w-[70%] border-[1px] border-green-600 flex justify-center items-center md:w-[50%]  lg:w-[40%] xl:w-[30%]  2xl:w-[20%]">
        <span>
          <PiGameController style={{ fontSize: "30px" }} />
        </span>
        <span>All Games</span>
      </button>
    </Fragment>
  );
};

export default ImageCardSection;
